import React from "react";
import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function CorporatePolicy() {
    return (
        <>
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20 px-4 min-h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto text-center relative z-10">
                    <Typography variant="h1" color="white" className="mb-4">
                        Corporate Policy
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80">
                        Our Commitment to Excellence, Sustainability, and Ethical Business Practices
                    </Typography>
                </div>
            </section>

            {/* Policy Content Section */}
            <section className="relative bg-white py-16 px-4">
                <div className="container mx-auto">
                    {/* Quality Policy */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-blue-500 pb-2">
                                Quality Policy
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                At Kh Shams Enterprise, we are committed to delivering packaging solutions that consistently
                                exceed customer expectations through superior quality, innovative design, and meticulous
                                craftsmanship.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Implement rigorous quality control measures at every production stage</li>
                                <li>Continuously improve our processes through regular audits and feedback</li>
                                <li>Invest in advanced technology and employee training</li>
                                <li>Adhere to international quality standards and certifications</li>
                                <li>Measure and monitor quality performance metrics regularly</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Environmental Policy */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-green-500 pb-2">
                                Environmental Policy
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                We recognize our responsibility to minimize environmental impact and promote sustainable
                                practices throughout our operations and product lifecycle.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Prioritize use of recycled, biodegradable, and sustainable materials</li>
                                <li>Reduce waste through efficient manufacturing processes</li>
                                <li>Minimize energy consumption and carbon footprint</li>
                                <li>Promote recycling and proper disposal practices</li>
                                <li>Comply with all environmental regulations and standards</li>
                                <li>Continuously research and implement eco-friendly alternatives</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Health & Safety Policy */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-red-500 pb-2">
                                Health & Safety Policy
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                The well-being of our employees, customers, and community is our highest priority.
                                We maintain a safe working environment through comprehensive safety protocols.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Provide regular safety training and equipment</li>
                                <li>Maintain clean, organized, and hazard-free facilities</li>
                                <li>Conduct regular safety audits and risk assessments</li>
                                <li>Encourage proactive reporting of safety concerns</li>
                                <li>Comply with all occupational health and safety regulations</li>
                                <li>Implement emergency preparedness and response plans</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Ethical Business Practices */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-purple-500 pb-2">
                                Ethical Business Practices
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                We conduct our business with integrity, transparency, and respect for all stakeholders,
                                maintaining the highest ethical standards in all our dealings.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Zero tolerance for corruption, bribery, or unethical practices</li>
                                <li>Fair treatment of employees, suppliers, and partners</li>
                                <li>Transparent pricing and business transactions</li>
                                <li>Protection of confidential information and intellectual property</li>
                                <li>Compliance with all applicable laws and regulations</li>
                                <li>Responsible marketing and truthful product representation</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Customer Satisfaction Policy */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-amber-500 pb-2">
                                Customer Satisfaction Policy
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                We are dedicated to building long-term relationships with our customers by delivering
                                exceptional value, responsive service, and customized solutions.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Understand and anticipate customer needs</li>
                                <li>Provide personalized packaging solutions</li>
                                <li>Maintain open and transparent communication</li>
                                <li>Respond promptly to inquiries and concerns</li>
                                <li>Continuously seek feedback for improvement</li>
                                <li>Stand behind our products with comprehensive guarantees</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Innovation Policy */}
                    <Card className="mb-12 bg-gray-100 shadow-lg border border-gray-100">
                        <CardBody className="p-8">
                            <Typography variant="h3" color="blue-gray" className="mb-6 border-b-2 border-cyan-500 pb-2">
                                Innovation & Continuous Improvement
                            </Typography>
                            <Typography className="text-blue-gray-700 mb-4">
                                We foster a culture of innovation and continuous improvement to stay at the forefront
                                of packaging technology and design.
                            </Typography>
                            <ul className="list-disc pl-6 text-blue-gray-700 space-y-2">
                                <li>Invest in research and development</li>
                                <li>Encourage creative thinking and new ideas</li>
                                <li>Stay updated with industry trends and technologies</li>
                                <li>Collaborate with clients on innovative solutions</li>
                                <li>Regularly review and enhance processes</li>
                                <li>Embrace digital transformation and automation</li>
                            </ul>
                        </CardBody>
                    </Card>

                    {/* Commitment Statement */}
                    <div className="bg-gray-300 rounded-lg p-8 text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-4">
                            Our Commitment
                        </Typography>
                        <Typography className="text-blue-gray-700 text-lg">
                            These policies represent our firm commitment to operating as a responsible, ethical,
                            and forward-thinking packaging solutions provider. We regularly review and update our
                            policies to ensure they remain relevant and effective in meeting our goals and serving
                            the needs of all our stakeholders.
                        </Typography>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CorporatePolicy;