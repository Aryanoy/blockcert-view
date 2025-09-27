import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Search, CheckCircle, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary animate-pulse-glow">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              Secure. Transparent.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tamper-Proof
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              CertiChain revolutionizes digital certificate verification using blockchain technology. 
              Issue, verify, and trust certificates with complete transparency and security.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/issue" className="flex items-center space-x-2">
                <FileCheck className="h-5 w-5" />
                <span>Issue Certificate</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/verify" className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Verify Certificate</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose CertiChain?</h2>
            <p className="text-lg text-muted-foreground">
              Built on blockchain technology for maximum security and transparency
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="card-professional hover:card-primary transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-trust">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Tamper-Proof Verification</CardTitle>
                <CardDescription>
                  Once issued, certificates cannot be altered or forged. Every certificate is cryptographically secured on the blockchain.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-professional hover:card-primary transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-trust">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Complete Transparency</CardTitle>
                <CardDescription>
                  All certificate transactions are recorded on the blockchain, providing a transparent and auditable history.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-professional hover:card-primary transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-trust">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Instant Verification</CardTitle>
                <CardDescription>
                  Recruiters and institutions can verify certificates instantly, reducing fraud and speeding up the hiring process.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Simple, secure, and efficient certificate management
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                      1
                    </div>
                    <CardTitle>For Institutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FileCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Issue Certificates</p>
                      <p className="text-sm text-muted-foreground">Enter student details and course information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Blockchain Storage</p>
                      <p className="text-sm text-muted-foreground">Certificate hash is securely stored on blockchain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-professional">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                      2
                    </div>
                    <CardTitle>For Verifiers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Search className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Enter Certificate ID</p>
                      <p className="text-sm text-muted-foreground">Input the certificate ID or hash to verify</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Instant Verification</p>
                      <p className="text-sm text-muted-foreground">Get immediate confirmation of authenticity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join the future of digital certificate verification with blockchain technology
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/issue">Start Issuing Certificates</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/verify">Verify a Certificate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-bold">CertiChain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CertiChain. Secure certificate verification on blockchain.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;