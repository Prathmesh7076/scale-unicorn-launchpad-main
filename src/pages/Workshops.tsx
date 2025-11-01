import { useState, useEffect } from "react";
import { Calendar, Clock, Users, ArrowRight, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkshopRegistrationForm from "@/components/WorkshopRegistrationForm";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Workshops = () => {
  const navigate = useNavigate();
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(true); // Popup visibility state

  const workshops = [
    {
      id: "business-visioning",
      title: "Business Visioning Workshop for Entrepreneurs",
      facilitator: "Sandipp Vijj",
      duration: "2 Days",
      description:
        "Comprehensive workshop covering purpose of life for entrepreneurs, 9 pillars of success, 5-step process (Idea→Planning→MVP1→Launch→Global Launch), law of attraction, visualization techniques, and pathway to achieving unicorn status.",
      route: "/workshops/business-visioning",
      featured: true,
    },
    {
      id: "growth-without-equity",
      title: "5x Growth Without Diluting Equity in 24 Months",
      facilitator: "Sam Kundu",
      duration: "1 Day",
      description:
        "Learn non-dilutive funding options, smart scaling and reinvestment strategies, revenue maximization techniques, and leveraging partnerships for growth.",
      route: "/workshops/smart-growth",
      featured: true,
    },
    {
      id: "crossing-chasm",
      title: "Crossing the Chasm Strategy",
      facilitator: "Sandipp Vijj",
      duration: "1 Day",
      description:
        "Master innovation diffusion curve, identify early majority, achieve product-market fit, overcome adoption barriers, and implement strategies for sustainable scaling.",
      route: "/workshops/crossing-chasm",
      featured: true,
    },
    {
      id: "finance-non-finance",
      title: "Mastering Business Finance: From Balance Sheets to Investment Decisions",
      facilitator: "CA Sahil Makkar",
      duration: "1 Day",
      description:
        "Understanding balance sheets, P&L, and cash flow, key performance indicators and ratios, budgeting and cost management, and financial planning for business growth.",
      route: "/workshops/business-visioning",
      featured: true,
    },
    {
      id: "real-estate",
      title: "Real Estate Compounded Growth Strategy",
      facilitator: "Mr Satyavir Yadav",
      duration: "2 Days",
      description:
        "Master the art of real estate investment with compound growth principles. Build generational wealth through strategic property investments.",
      route: "/workshops/real-estate-strategy",
    },
    {
      id: "conceptualize-unicorn",
      title: "Conceptualize Your Unicorn",
      facilitator: "Sandipp Vijj",
      duration: "10 Sessions",
      description:
        "Transform your startup idea into a structured unicorn blueprint using our proven 10-book methodology framework.",
      route: "/workshops/conceptualize-unicorn",
    },
    {
      id: "funding-mastery",
      title: "Funding Mastery Workshop",
      facilitator: "Sandipp Vijj",
      duration: "4 Sessions",
      description:
        "Master the art of raising capital and securing funding for your startup with proven strategies and investor insights.",
      route: "/workshops/funding-mastery",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      facilitator: "Dinesh Makhija & Amardeep Bajpai",
      duration: "4 Sessions",
      description:
        "Transform your business with cutting-edge digital strategies, AI integration, and technology implementation.",
      route: "/workshops/digital-transformation",
    },
    {
      id: "leadership-excellence",
      title: "Leadership Excellence",
      facilitator: "Sandipp Vijj",
      duration: "4 Sessions",
      description:
        "Develop exceptional leadership skills, build high-performing teams, and create lasting organizational impact.",
      route: "/workshops/leadership-excellence",
    },
    {
      id: "franchising-mastery",
      title: "Franchising Mastery",
      facilitator: "Sam Kundu",
      duration: "4 Sessions",
      description:
        "Learn from the 'Franchising King' how to build scalable franchise models and expand your business globally.",
      route: "/workshops/franchising-mastery",
    },
    {
      id: "fintech-innovation",
      title: "FinTech Innovation Workshop",
      facilitator: "Chandra Patni",
      duration: "4 Sessions",
      description:
        "Navigate the FinTech landscape, understand regulatory requirements, and build innovative financial solutions.",
      route: "/workshops/fintech-innovation",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* 🎉 Workshop Announcement Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative p-6 text-center animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              🚀 Emerging Workshops – Mohali!
            </h2>
            <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1 text-purple-600" />
              STPI, Mohali
            </div>
            <div className="flex justify-center items-center text-sm text-gray-600 mb-4 space-x-3">
              <Calendar className="h-4 w-4 text-purple-600" />
              <span>01st – 02nd Nov 2025</span>
              <Clock className="h-4 w-4 text-purple-600 ml-2" />
              <span>10:00 AM – 05:00 PM</span>
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Join us for transformative workshops on{" "}
              <b>business scaling, funding, financial mastery, and personal growth</b>.
              Limited seats — grab your Early Bird Discount now!
            </p>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() =>
                  (window.location.href = "https://idea2unicorn.ai/live_event")
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-5"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPopup(false)}
                className="border-gray-400 text-gray-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proprietary Workshops
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exclusive, hands-on workshops designed to accelerate your entrepreneurial journey
              </p>
            </div>

            {/* Workshop Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className={`bg-card border rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-200 hover:scale-105 ${
                    workshop.featured
                      ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10"
                      : "border-border"
                  }`}
                >
                  {workshop.featured && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Featured Workshop
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">
                      {workshop.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Facilitator: {workshop.facilitator}
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {workshop.description}
                  </p>

                  <Button
                    className="w-full btn-primary group"
                    onClick={() => navigate(workshop.route)}
                  >
                    Learn More & Register
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Workshop Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground">Entrepreneurs Trained</div>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    85%
                  </div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    ₹250Cr+
                  </div>
                  <div className="text-muted-foreground">Funding Raised</div>
                </div>
                <div>
                  <ArrowRight className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    100+
                  </div>
                  <div className="text-muted-foreground">Workshops Conducted</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedWorkshop && (
        <WorkshopRegistrationForm
          workshopTitle={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
};

export default Workshops;
