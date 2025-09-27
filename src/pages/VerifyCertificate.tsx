import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Search, CheckCircle, XCircle, Calendar, GraduationCap, Building } from "lucide-react";
import Header from "@/components/Header";

interface CertificateResult {
  isValid: boolean;
  recipientName?: string;
  courseName?: string;
  institution?: string;
  issueDate?: string;
  grade?: string;
  transactionHash?: string;
  blockNumber?: string;
}

const VerifyCertificate = () => {
  const { toast } = useToast();
  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CertificateResult | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    
    // Simulate blockchain verification
    setTimeout(() => {
      // Mock verification result
      const isValid = Math.random() > 0.3; // 70% chance of valid certificate
      
      if (isValid) {
        setResult({
          isValid: true,
          recipientName: "John Smith",
          courseName: "Bachelor of Computer Science",
          institution: "University of Technology",
          issueDate: "2024-01-15",
          grade: "A (Excellent)",
          transactionHash: "0x" + Math.random().toString(16).substr(2, 40),
          blockNumber: "18,234,567"
        });
        
        toast({
          title: "Certificate Verified!",
          description: "This certificate is valid and authenticated on the blockchain.",
        });
      } else {
        setResult({
          isValid: false
        });
        
        toast({
          title: "Verification Failed",
          description: "Certificate not found or invalid.",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Verify Certificate</h1>
            <p className="mt-2 text-muted-foreground">
              Enter a certificate ID to verify its authenticity on the blockchain
            </p>
          </div>

          <Card className="card-professional mb-6">
            <CardHeader>
              <CardTitle>Certificate Verification</CardTitle>
              <CardDescription>
                Enter the certificate ID or hash to check its validity
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="certificateId">Certificate ID / Hash</Label>
                  <Input
                    id="certificateId"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    placeholder="Enter certificate ID (e.g., CERT-1234567890)"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading || !certificateId.trim()} 
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>Verify Certificate</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {result && (
            <Card className={`card-professional ${result.isValid ? 'border-accent' : 'border-destructive'}`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${result.isValid ? 'text-accent' : 'text-destructive'}`}>
                  {result.isValid ? (
                    <>
                      <CheckCircle className="h-6 w-6" />
                      <span>Certificate Valid</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-6 w-6" />
                      <span>Certificate Invalid</span>
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {result.isValid 
                    ? "This certificate has been verified on the blockchain"
                    : "This certificate could not be verified or does not exist"
                  }
                </CardDescription>
              </CardHeader>
              
              {result.isValid && (
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-semibold">{result.recipientName}</p>
                        <p className="text-sm text-muted-foreground">Recipient</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-semibold">{result.institution}</p>
                        <p className="text-sm text-muted-foreground">Institution</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{result.courseName}</p>
                    <p className="text-muted-foreground">Course/Program</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Issued: {result.issueDate}</span>
                    </div>
                    
                    {result.grade && (
                      <div className="text-sm">
                        <span className="font-medium">Grade: </span>
                        <span>{result.grade}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm font-medium">Blockchain Details:</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p><span className="font-medium">Transaction:</span> {result.transactionHash}</p>
                      <p><span className="font-medium">Block:</span> {result.blockNumber}</p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default VerifyCertificate;