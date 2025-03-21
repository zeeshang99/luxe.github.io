import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      navigate('/login');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4"
         style={{
           backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      <div className="w-full max-w-[1200px] h-[600px] bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden flex">
        <div className="w-1/2 p-8 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
            alt="Futuristic Robot"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-xl text-white/80">Join us today!</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Create Account
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/50">Or continue with</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mx-auto" />
              </button>
              <button className="flex-1 py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mx-auto" />
              </button>
              <button className="flex-1 py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mx-auto" />
              </button>
            </div>

            <p className="text-center text-white/50">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}