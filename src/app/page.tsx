import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, UserPlus, LogIn, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Welcome to GUVI-AUTH
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete authentication system with registration, login, and profile management
            </p>
          </div>

          {/* Flow Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>1. Register</CardTitle>
                <CardDescription>
                  Create your account with email and password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/signup">
                  <Button className="w-full group">
                    Sign Up
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <LogIn className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>2. Login</CardTitle>
                <CardDescription>
                  Access your account with your credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/login">
                  <Button variant="outline" className="w-full group">
                    Login
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>3. Profile</CardTitle>
                <CardDescription>
                  Manage your personal information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/profile">
                  <Button variant="secondary" className="w-full group">
                    View Profile
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Start */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Follow these steps to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary flex-shrink-0">Step 1:</span>
                  <span>Click "Sign Up" to create a new account with your email and password</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary flex-shrink-0">Step 2:</span>
                  <span>After registration, you'll be redirected to the login page</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary flex-shrink-0">Step 3:</span>
                  <span>Login with your credentials to access your profile</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary flex-shrink-0">Step 4:</span>
                  <span>Update your profile with additional details like age, date of birth, and contact information</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}