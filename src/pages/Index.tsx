import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LeadershipTeam from "@/components/LeadershipTeam";
import FounderJourneySection from "@/components/FounderJourneySection";
import VisionImpactGoals from "@/components/VisionImpactGoals";
import PurposeOfCommunity from "@/components/PurposeOfCommunity";
import SandippMethodology from "@/components/SandippMethodology";
import WorkshopsSection from "@/components/WorkshopsSection";
import GrowthStrategiesSection from "@/components/GrowthStrategiesSection";
import ReadyToScale from "@/components/ReadyToScale";
import SuccessStories from "@/components/SuccessStories";
import AwardsSection from "@/components/AwardsSection";
import SocialMediaUpdates from "@/components/SocialMediaUpdates";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Mail } from "lucide-react"; // ✅ Added Lucide icons

const LIVE_EVENT_URL = "https://idea2unicorn.ai/live_event";
const DONT_SHOW_KEY = "i2u_event_modal_dont_show";

const Index = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Existing scroll-to logic
  useEffect(() => {
    const state = (location.state as any) || {};
    if (state?.scrollTo) {
      const id = state.scrollTo as string;
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Show the workshop modal on initial mount unless user opted out
  useEffect(() => {
    const dontShow = localStorage.getItem(DONT_SHOW_KEY) === "1";
    if (!dontShow) {
      setIsModalOpen(true);
    }
  }, []);

  // Keep localStorage in sync with checkbox
  useEffect(() => {
    if (dontShowAgain) {
      localStorage.setItem(DONT_SHOW_KEY, "1");
    } else {
      localStorage.removeItem(DONT_SHOW_KEY);
    }
  }, [dontShowAgain]);

  // Move focus to the close button when modal opens & add Esc handler
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  // Body scroll lock while modal open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }
    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [isModalOpen]);

  const handleLearnMore = () => {
    window.location.assign(LIVE_EVENT_URL);
  };

  const handleRegister = () => {
    window.open(LIVE_EVENT_URL, "_blank", "noopener,noreferrer");
  };

  const overlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <LeadershipTeam />
        <FounderJourneySection />
        <VisionImpactGoals />
        <PurposeOfCommunity />
        <SandippMethodology />
        <WorkshopsSection />
        <GrowthStrategiesSection />
        <ReadyToScale />
        <SuccessStories />
        <AwardsSection />
        <SocialMediaUpdates />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />

      {/* Workshop Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="i2u-workshop-title"
          onClick={overlayClick}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="
              relative z-10
              w-full
              h-full
              sm:h-auto
              sm:max-h-[90vh]
              sm:max-w-4xl
              rounded-none
              sm:rounded-2xl
              bg-white dark:bg-slate-900
              shadow-2xl ring-1 ring-slate-200
              overflow-hidden
              flex
              flex-col
            "
            style={{ maxWidth: "min(96rem, 100%)" }}
            aria-describedby="i2u-workshop-desc"
          >
            {/* Top band with title */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 flex-shrink-0">
              <div>
                <h3
                  id="i2u-workshop-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white"
                >
                  PROPRIETARY WORKSHOPS FOR STARTUP SUCCESS - Mohali
                </h3>
                <p className="mt-1 text-sm text-purple-100">
                  STPI, Mohali · 01st - 02nd NOV 2025 · 10:00AM - 05:00PM
                </p>
              </div>

              <div className="mt-4 sm:mt-0 flex gap-3 items-center">
                <button
                  ref={closeBtnRef}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close workshop announcement"
                  className="inline-flex items-center rounded-md bg-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Close
                </button>

                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Main body */}
            <div
              id="i2u-workshop-desc"
              className="px-6 py-6 sm:px-8 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-auto"
              style={{
                maxHeight: "calc(90vh - 96px)",
              }}
            >
              {/* Left column */}
              <div className="lg:col-span-1">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  This two-day hands-on workshop helps you build a success
                  mindset, align goals and grow sustainably. Topics: funding,
                  scaling, revenue strategies, financial management & market
                  insights.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-purple-200 p-4 bg-purple-50">
                    <div className="text-xs text-purple-700 font-semibold">
                      For one Session
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Entrepreneur</span>
                        <span className="font-bold">₹2500</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Students</span>
                        <span className="font-bold">₹1250</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-purple-200 p-4 bg-purple-50">
                    <div className="text-xs text-purple-700 font-semibold">
                      For all Workshops
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Entrepreneur</span>
                        <span className="font-bold">₹7500</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Students</span>
                        <span className="font-bold">₹3750</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ✅ Contact section with updated icons */}
                <div className="mt-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-700" />
                    <span>+91 98786 00316</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-purple-700" />
                    <span>info@punjabangelsnetwork.com</span>
                  </div>
                </div>
              </div>

              {/* Right columns */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Day 1 */}
                <div className="rounded-xl border border-purple-100 p-4 bg-white shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-purple-700">Day 1</h4>
                    <span className="text-xs text-slate-500">01 Nov 2025</span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    <div className="rounded-lg bg-purple-600 text-white p-3">
                      <div className="font-semibold">Workshop 1</div>
                      <div className="mt-1 text-sm">
                        Business Visioning Workshop for Entrepreneurs
                      </div>
                      <div className="mt-2 text-xs font-medium bg-white/20 inline-block rounded-full px-3 py-1">
                        Sandiip Vijj
                      </div>
                    </div>

                    <div className="rounded-lg bg-purple-500 text-white p-3">
                      <div className="font-semibold">Workshop 2</div>
                      <div className="mt-1 text-sm">
                        5X Growth Without Diluting Equity in 24 Months
                      </div>
                      <div className="mt-2 text-xs font-medium bg-white/20 inline-block rounded-full px-3 py-1">
                        Sam Kundu
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="rounded-xl border border-purple-100 p-4 bg-white shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-purple-700">Day 2</h4>
                    <span className="text-xs text-slate-500">02 Nov 2025</span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    <div className="rounded-lg bg-purple-600 text-white p-3">
                      <div className="font-semibold">Workshop 1</div>
                      <div className="mt-1 text-sm">
                        Crossing the Chasm Strategy
                      </div>
                      <div className="mt-2 text-xs font-medium bg-white/20 inline-block rounded-full px-3 py-1">
                        Sandiip Vijj
                      </div>
                    </div>

                    <div className="rounded-lg bg-purple-500 text-white p-3">
                      <div className="font-semibold">Workshop 2</div>
                      <div className="mt-1 text-sm">
                        Mastering Business Finance: From Balance Sheets to
                        investment Decisions
                      </div>
                      <div className="mt-2 text-xs font-medium bg-white/20 inline-block rounded-full px-3 py-1">
                        Sahil Makkar
                      </div>
                    </div>
                  </div>
                </div>

                {/* Register CTA */}
                <div className="md:col-span-2 mt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-purple-100 bg-purple-50">
                    <div>
                      <div className="text-lg font-semibold text-purple-700">
                        Early Bird Discounts!
                      </div>
                      <div className="text-sm text-slate-700 mt-1">
                        Register now to secure your seat. Limited seats
                        available.
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
                      >
                        Maybe later
                      </button>

                      <button
                        onClick={handleRegister}
                        className="rounded-md bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        Register now
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                    <input
                      id="dont-show-again"
                      type="checkbox"
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="dont-show-again">
                      Don't show this again
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-white text-xs text-slate-600 flex-shrink-0">
              By clicking “Learn more” you will be redirected to our event page.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
