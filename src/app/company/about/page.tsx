import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";

const AboutPage: React.FC = () => {
  return (
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4 text-gray-700">
              DigitalJugaad was founded with a simple yet powerful vision: to make premium digital products accessible to everyone at an affordable price. 
              We believe that quality digital resources shouldn't break the bank, which is why we offer all our products at a flat rate of Rs. 99.
            </p>
            <p className="text-gray-700">
              Our team comprises passionate digital creators, developers, and marketers who curate and create high-value digital products 
              that help individuals and small businesses thrive in the digital world.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4 text-gray-700">
              Our mission is to democratize access to valuable digital products by providing high-quality resources at an unbeatable price point. 
              We strive to empower entrepreneurs, students, creators, and small businesses with tools and resources that help them succeed.
            </p>
            <p className="text-gray-700">
              We're committed to maintaining the highest standards of quality across our diverse catalog while keeping our pricing transparent and affordable.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">E-Book Bundles</h3>
                <p className="text-sm text-gray-600">Curated collections of knowledge on various topics</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">Software & Tools</h3>
                <p className="text-sm text-gray-600">Useful applications to boost productivity</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">Templates</h3>
                <p className="text-sm text-gray-600">Ready-to-use designs for various purposes</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">Websites & Apps</h3>
                <p className="text-sm text-gray-600">Digital solutions for your online presence</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">Email Databases</h3>
                <p className="text-sm text-gray-600">Targeted contact lists for your outreach</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">Courses</h3>
                <p className="text-sm text-gray-600">Educational content to learn new skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Affordability</h3>
                <p className="text-sm text-gray-600">Making quality digital products accessible to everyone at Rs. 99</p>
              </div>
              <div>
                <h3 className="font-medium">Quality</h3>
                <p className="text-sm text-gray-600">Ensuring all products meet high standards despite the low price point</p>
              </div>
              <div>
                <h3 className="font-medium">Variety</h3>
                <p className="text-sm text-gray-600">Offering a diverse range of products to meet different needs</p>
              </div>
              <div>
                <h3 className="font-medium">Customer Satisfaction</h3>
                <p className="text-sm text-gray-600">Prioritizing user experience and support</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default AboutPage;