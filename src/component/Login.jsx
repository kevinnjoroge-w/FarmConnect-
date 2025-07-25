import React, { useState } from 'react'

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true)

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to FarmConnect</h2>
      <div className="mb-4 text-center">
        <button
          onClick={() => setHasAccount(true)}
          className={`px-4 py-2 mr-2 rounded ${hasAccount ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          I have an account
        </button>
        <button
          onClick={() => setHasAccount(false)}
          className={`px-4 py-2 rounded ${!hasAccount ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          I need to register
        </button>
      </div>

      {hasAccount ? (
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="loginEmail" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="loginEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="loginPassword" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="loginPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:text-green-800">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="registerEmail" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="registerEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="registerPassword" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="registerPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      )}
    </div>
  )
}

export default Login
