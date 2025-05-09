import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TermsPage: React.FC = () => {
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
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to DigitalJugaad. These Terms and Conditions govern your use of our website and the purchase 
              of digital products offered by us. By accessing our website or purchasing our products, you agree to 
              these Terms and Conditions in full.
            </p>
            <p className="text-gray-700">
              If you disagree with any part of these terms, please do not use our website or purchase our products.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li><strong>"Company"</strong> refers to DigitalJugaad, its owners, directors, officers, employees, and affiliates.</li>
              <li><strong>"Website"</strong> refers to digitaljugaad.com and all its subdomains.</li>
              <li><strong>"Products"</strong> refers to the digital items available for purchase on our website.</li>
              <li><strong>"User"</strong> or <strong>"You"</strong> refers to any individual or entity that uses our website or purchases our products.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Products and Pricing</h2>
            <p className="text-gray-700 mb-4">
              All products on our website are digital in nature and priced at Rs. 99 unless specifically indicated otherwise.
            </p>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify the pricing of our products at any time without prior notice. However, 
              any price changes will not affect products that have already been purchased.
            </p>
            <p className="text-gray-700">
              All prices displayed on our website include applicable taxes and fees.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">License and Usage Rights</h2>
            <p className="text-gray-700 mb-4">
              Upon purchasing a product, you are granted a non-exclusive, non-transferable license to use the product for 
              personal or internal business purposes only, unless otherwise specified in the product description.
            </p>
            <p className="text-gray-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Redistribute, sell, rent, lease, sublicense, or transfer the product to any third party.</li>
              <li>Reverse engineer, decompile, or disassemble the product.</li>
              <li>Remove any copyright, trademark, or other proprietary notices from the product.</li>
              <li>Use the product for any illegal or unauthorized purpose.</li>
            </ul>
            <p className="text-gray-700">
              For products that include content creation templates or tools, the output you create using these tools is yours to use as you wish, 
              but the original template or tool remains the property of DigitalJugaad.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Account and Payment</h2>
            <p className="text-gray-700 mb-4">
              To purchase products from our website, you may need to create an account. You are responsible for maintaining the 
              confidentiality of your account details and for all activities that occur under your account.
            </p>
            <p className="text-gray-700 mb-4">
              We accept various payment methods as indicated on our website. All payments are processed securely through our payment gateways.
            </p>
            <p className="text-gray-700">
              By providing payment information, you represent and warrant that you have the legal right to use the payment method you provide.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, 
              and software, is the property of DigitalJugaad or its content suppliers and is protected by Indian and international 
              copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              The compilation of all content on this site is the exclusive property of DigitalJugaad and is protected by copyright laws.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              DigitalJugaad shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Your access to or use of or inability to access or use the website or products.</li>
              <li>Any conduct or content of any third party on the website.</li>
              <li>Any unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>
            <p className="text-gray-700">
              In no event shall our total liability to you for all claims exceed the amount you paid for the product(s) giving rise to such liability.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting 
              on our website. Your continued use of the website after any changes indicates your acceptance of the modified Terms and Conditions.
            </p>
            <p className="text-gray-700 mb-4">
              It is your responsibility to review these Terms and Conditions periodically for changes.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms and Conditions, please contact us at legal@digitaljugaad.com or through our Contact page.
            </p>
          </CardContent>
        </Card>
      </div>
  );
};

export default TermsPage;