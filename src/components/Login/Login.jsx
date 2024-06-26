import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Login</h3>
          <p className="text-sm text-muted-foreground">Enter your email and password to access your account.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              required
              type="password"
            />
          </div>
        </div>
        <div className="p-6 flex items-center justify-between">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <a className="underline underline-offset-4" href="#" rel="ugc">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
