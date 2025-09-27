import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileCheck, Hash, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const IssueCertificate = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [certificateData, setCertificateData] = useState({
    recipientName: "",
    courseName: "",
    grade: "",
    institution: "",
    issueDate: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      const mockHash = "0x" + Math.random().toString(16).substr(2, 40);
      const certificateId = "CERT-" + Date.now();
      
      toast({
        title: "Certificate Issued Successfully!",
        description: `Certificate ID: ${certificateId}`,
      });
      
      setIsLoading(false);
      setCertificateData({
        recipientName: "",
        courseName: "",
        grade: "",
        institution: "",
        issueDate: "",
        description: ""
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setCertificateData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
              <FileCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Issue New Certificate</h1>
            <p className="mt-2 text-muted-foreground">
              Create a tamper-proof digital certificate on the blockchain
            </p>
          </div>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Hash className="h-5 w-5" />
                <span>Certificate Details</span>
              </CardTitle>
              <CardDescription>
                Enter the certificate information to generate a blockchain-verified credential
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName">Recipient Name *</Label>
                    <Input
                      id="recipientName"
                      value={certificateData.recipientName}
                      onChange={(e) => handleInputChange("recipientName", e.target.value)}
                      placeholder="Enter recipient's full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Input
                      id="institution"
                      value={certificateData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      placeholder="University or Organization"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="courseName">Course/Program *</Label>
                    <Input
                      id="courseName"
                      value={certificateData.courseName}
                      onChange={(e) => handleInputChange("courseName", e.target.value)}
                      placeholder="Course or certification name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade/Result</Label>
                    <Select value={certificateData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+ (Outstanding)</SelectItem>
                        <SelectItem value="A">A (Excellent)</SelectItem>
                        <SelectItem value="B+">B+ (Very Good)</SelectItem>
                        <SelectItem value="B">B (Good)</SelectItem>
                        <SelectItem value="C+">C+ (Satisfactory)</SelectItem>
                        <SelectItem value="C">C (Pass)</SelectItem>
                        <SelectItem value="Pass">Pass</SelectItem>
                        <SelectItem value="Distinction">Distinction</SelectItem>
                        <SelectItem value="Merit">Merit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issueDate">Issue Date *</Label>
                  <Input
                    id="issueDate"
                    type="date"
                    value={certificateData.issueDate}
                    onChange={(e) => handleInputChange("issueDate", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    value={certificateData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Additional information about the certificate..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>Issuing Certificate...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Issue Certificate</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default IssueCertificate;