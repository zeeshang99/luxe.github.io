import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  // Prevent direct access to login page
  if (!location.state?.fromManager) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (signInError) throw signInError;

      if (data.session) {
        // Set authentication state
        localStorage.setItem('adminAuthenticated', 'true');
        localStorage.setItem('adminToken', data.session.access_token);
        
        // Force refresh session
        await supabase.auth.refreshSession();
        
        navigate('/admin-dashboard');
      } else {
        throw new Error('No session established');
      }
    } catch (error: any) {
      setError('Invalid credentials');
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminToken');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      setError('Please enter your email');
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Reset link sent",
        description: "Check your email for the password reset link",
      });
      setIsResetting(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4"
         style={{
           backgroundImage: 'url(/banner1.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed',
         }}>
      <div className="max-w-[500px] w-full bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden drop-shadow-2xl shadow-2xl p-8">    
        <div className="flex flex-col justify-center">
          <div className="space-y-6">
            {!isResetting ? (
              <>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">Admin Login</h2>
                  <p className="text-xl text-white/80">Access Dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsResetting(true)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {error && (
                    <div className="space-y-2">
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Sign In
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
                  <p className="text-xl text-white/80">Enter your email to reset</p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {error && (
                    <div className="space-y-2">
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsResetting(false)}
                      className="w-full py-3 bg-gray-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      Back to Login
                    </button>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}