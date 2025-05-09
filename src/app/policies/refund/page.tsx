import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const RefundPolicyPage: React.FC = () => {
  return (
      <div className="max-w-3xl mx-auto">
        <Alert className="mb-8 bg-gray-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Last updated: May 9, 2025
          </AlertDescription>
        </Alert>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              At DigitalJugaad, we strive to ensure your satisfaction with every purchase. However, due to the digital 
              nature of our products and their affordable pricing at Rs. 99, we have a specific refund policy outlined below.
            </p>
            <p className="text-gray-700">
              This Refund Policy applies to all purchases made through our website and outlines the circumstances 
              under which refunds may be issued.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Digital Products</h2>
            <p className="text-gray-700 mb-4">
              Due to the instant delivery and digital nature of our products, all sales are generally final. 
              Once a digital product has been purchased and delivered, we do not typically offer refunds unless:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>The product is completely non-functional or cannot be accessed due to technical issues on our end.</li>
              <li>The product significantly differs from its description on our website.</li>
              <li>You have been charged multiple times for the same product.</li>
            </ul>
            <p className="text-gray-700">
              In these cases, please contact our support team within 7 days of purchase with details of the issue.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="text-gray-700 mb-4">
              If your situation qualifies for a refund, here's how the process works:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
              <li>Contact our support team at support@digitaljugaad.com with your order number and details of the issue.</li>
              <li>Our team will review your request within 48 hours.</li>
              <li>If approved, refunds will be processed back to the original payment method.</li>
              <li>Refunds typically take 5-7 business days to reflect in your account, depending on your payment provider.</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">
              The following items are not eligible for refunds under any circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Email databases and contact lists</li>
              <li>Products that have been downloaded, accessed, or used</li>
              <li>Products purchased more than 7 days ago</li>
              <li>Products where the customer has violated our Terms and Conditions</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our Refund Policy, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Email: support@digitaljugaad.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Contact form: Visit our Contact page</li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
};

export default RefundPolicyPage;