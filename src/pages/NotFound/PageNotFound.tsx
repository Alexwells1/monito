// PageNotFound.tsx
import { NavLink } from "react-router-dom";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                className="w-40 h-40 text-primary"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="24"
                  fill="currentColor"
                >
                  404
                </text>
                <path
                  d="M30 30L70 70M70 30L30 70"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Oops!
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Page Not Found
              </h1>
              <p className="text-muted-foreground text-lg">
                It seems you've ventured into uncharted territory. The page
                you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gap-2">
                <NavLink to="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </NavLink>
              </Button>

              <Button asChild variant="outline" className="gap-2">
                <NavLink to="/contact">
                  <MessageCircle className="h-4 w-4" />
                  Contact Support
                </NavLink>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="gap-2"
                onClick={() => window.history.back()}
              >
                <div>
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </div>
              </Button>
            </div>

            {/* Additional Help */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help?{" "}
                <NavLink
                  to="/help"
                  className="text-primary hover:underline font-medium"
                >
                  Visit our help center
                </NavLink>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            While you're here, did you know? The term "404 error" comes from the
            HTTP status code for "Not Found".
          </p>
        </div>
      </div>
    </div>
  );
}
