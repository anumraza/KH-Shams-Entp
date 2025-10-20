import React from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function AboutUs() {
  return (
    <>
      {/* Enhanced Header Section with Gradient */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20 px-4 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Typography
              variant="h1"
              color="white"
              className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              About Kh Shams Enterprise
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
            >
              Leading the packaging industry with innovation, quality, and sustainable solutions since 2010
            </Typography>
          </div>

        </div>
      </section>

      {/* Enhanced Company Overview Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-8 font-bold text-3xl md:text-4xl"
                >
                  Our Story
                </Typography>
                <Typography variant="paragraph" className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Founded in 2010, Kh Shams Enterprise began as a small packaging workshop with a big vision:
                  to revolutionize how businesses package and present their products. What started as a
                  humble operation has grown into a leading packaging solutions provider serving clients
                  across multiple industries.
                </Typography>
                <Typography variant="paragraph" className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Our journey has been guided by a commitment to innovation, quality, and environmental
                  responsibility. We've continuously invested in advanced technology and skilled
                  craftsmanship to deliver packaging that not only protects products but also enhances
                  brand value and reduces environmental impact.
                </Typography>
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Download Company Profile
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-100 rounded-full opacity-50"></div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="/img/1 (16).png"
                  // src="/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 14.25.18_2092db2f.jpg"
                  alt="Our Packaging Facility"
                  className="h-full w-auto object-cover"
                />
              </div>

              {/* Floating stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <Typography variant="h3" className="text-blue-600 font-bold mb-1">
                    35+
                  </Typography>
                  <Typography variant="small" className="text-gray-600 font-semibold">
                    Years of Excellence
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <Card className="shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <CardBody className="p-10 text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Typography variant="h3" color="blue-gray" className="mb-6 font-bold">
                  Our Mission
                </Typography>
                <Typography variant="paragraph" className="text-gray-700 text-lg leading-relaxed">
                  To provide innovative, sustainable, and cost-effective packaging solutions that
                  exceed customer expectations while minimizing environmental impact. We strive to
                  be the trusted partner that helps businesses succeed through superior packaging.
                </Typography>
              </CardBody>
            </Card>

            {/* Vision Card */}
            <Card className="shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
              <CardBody className="p-10 text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <Typography variant="h3" color="blue-gray" className="mb-6 font-bold">
                  Our Vision
                </Typography>
                <Typography variant="paragraph" className="text-gray-700 text-lg leading-relaxed">
                  To be the leading packaging solutions provider globally, recognized for innovation,
                  sustainability, and excellence. We aim to set new standards in the packaging industry
                  while contributing positively to our community and environment.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4 font-bold text-3xl md:text-4xl">
              Our Core Values
            </Typography>
            <Typography variant="lead" className="text-gray-600 text-xl max-w-2xl mx-auto">
              The principles that guide everything we do
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "Continuously exploring new materials, technologies, and designs to stay ahead of industry trends.",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Committed to eco-friendly practices and reducing environmental impact through sustainable packaging solutions.",
                color: "from-green-500 to-green-700"
              },
              {
                icon: "⭐",
                title: "Quality",
                description: "Uncompromising commitment to excellence in every product we create and every service we provide.",
                color: "from-amber-500 to-amber-700"
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "Building long-term relationships based on trust, transparency, and mutual success with our clients.",
                color: "from-purple-500 to-purple-700"
              }
            ].map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full transform hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-4 font-semibold group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600 leading-relaxed">
                    {value.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-700 py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Typography variant="h2" color="white" className="mb-16 font-bold text-3xl md:text-4xl">
            Our Achievements
          </Typography>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Successfully Completed for Clients", icon: "🎯", delay: "0" },
              { number: "98%", label: "Client Satisfaction Rate Across Industries", icon: "⭐", delay: "200" },
              { number: "24/7", label: "Dedicated Customer Support Available Anytime", icon: "🛡️", delay: "400" },
              { number: "35+", label: "Years Experience in Printing and Packaging", icon: "🏆", delay: "600" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  {stat.icon}
                </div>
                <Typography variant="h1" color="white" className="mb-2 font-bold text-4xl md:text-5xl">
                  {stat.number}
                </Typography>
                <Typography variant="h6" color="white" className="opacity-90 font-semibold">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="relative bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4 font-bold text-3xl md:text-4xl">
              Leadership Team
            </Typography>
            <Typography variant="lead" className="text-gray-600 text-xl max-w-2xl mx-auto">
              Meet the passionate leaders driving innovation and excellence at Kh Shams Enterprise
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "KH Shams",
                position: "CEO & Founder",
                image: "/img/maaz-ijaz-xKn9Udjublw-unsplash.jpg",
                // image: "/KH-Shams-Entp/img/maaz-ijaz-xKn9Udjublw-unsplash.jpg",
                description: "With over 20 years in the packaging industry, leading our vision for innovation and growth."
              },
              {
                name: "Sarah Chen",
                position: "Operations Director",
                image: "/img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
                // image: "/KH-Shams-Entp/img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
                description: "Ensures our manufacturing processes meet the highest standards of quality and efficiency."
              },
              {
                name: "David Martinez",
                position: "Sustainability Officer",
                image: "/img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
                // image: "/KH-Shams-Entp/img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
                description: "Leads our initiatives in eco-friendly packaging and sustainable business practices."
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <CardHeader floated={false} className="h-72 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardHeader>
                <CardBody className="text-center p-8">
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                    {member.name}
                  </Typography>
                  <Typography variant="paragraph" color="blue" className="mb-4 font-semibold">
                    {member.position}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600">
                    {member.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4 font-bold text-3xl md:text-4xl">
              Certifications & Compliance
            </Typography>
            <Typography variant="lead" className="text-gray-600 text-xl max-w-2xl mx-auto">
              Our commitment to quality and standards
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: "ISO 9001", description: "Quality Management", icon: "📊" },
              { name: "FSC Certified", description: "Sustainable Forestry", icon: "🌳" },
              { name: "ISO 14001", description: "Environmental Management", icon: "♻️" },
              { name: "FDA Approved", description: "Food Safety Standards", icon: "🍃" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-semibold">
                  {cert.name}
                </Typography>
                <Typography variant="small" className="text-gray-600 font-medium">
                  {cert.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="white" className="mb-6 font-bold text-3xl md:text-4xl">
            Ready to Transform Your Packaging?
          </Typography>
          <Typography variant="lead" color="white" className="mb-10 text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Kh Shams Enterprise for their packaging needs
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Button>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;