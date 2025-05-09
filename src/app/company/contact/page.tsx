'use client'
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Input 
} from "@/components/ui/input";
import { 
  Textarea 
} from "@/components/ui/textarea";
import { 
  Button 
} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Note: In a real implementation, you would need to install these packages:
// npm install react-hook-form zod @hookform/resolvers

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage: React.FC = () => {
  // In a real implementation, this would work with the imported packages
  const form = {
    register: (p0: string) => ({}),
    handleSubmit: (cb: any) => (e: any) => {
      e.preventDefault();
      cb({ name: "", email: "", subject: "", message: "" });
    },
    formState: { errors: {} },
    control: {},
  };

  function onSubmit(values: any) {
    console.log(values);
    // Submit logic would go here
  }

  return (
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    {...form.register("name")} 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    {...form.register("email")} 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is this about?" 
                    {...form.register("subject")} 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5} 
                    {...form.register("message")} 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-gray-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:support@digitaljugaad.com" className="text-sm text-gray-600 hover:underline">
                        support@digitaljugaad.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3 text-gray-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-sm text-gray-600 hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;