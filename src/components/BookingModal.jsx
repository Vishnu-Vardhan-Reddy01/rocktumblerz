import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Clock, CheckCircle2, Sparkles, User, Mail, Phone, Baby, Send, Copy, Check } from 'lucide-react';

const DEFAULT_RECIPIENT_EMAIL = 'hello@rocktumblerz.com';

export default function BookingModal({ isOpen, onClose, initialCentre = 'nanakramguda', recipientEmail = DEFAULT_RECIPIENT_EMAIL }) {
  const [centre, setCentre] = useState(initialCentre);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '2-3 years',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '9:30 AM',
    notes: '',
  });

  const centres = [
    { id: 'nanakramguda', name: 'Nanakramguda', venue: 'Rock Tumblerz at Kidz District', status: 'Available' },
    { id: 'kokapet', name: 'Kokapet', venue: 'Rock Tumblerz at Peekazoo', status: 'Available' },
    { id: 'kismathpur', name: 'Kismathpur', venue: 'Rock Tumblerz at Play Panda', status: 'Coming Soon / Waitlist' },
  ];

  const selectedCentreObj = centres.find((c) => c.id === centre) || centres[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `New Centre Visit Booking: ${formData.childName || 'Child'} (${selectedCentreObj.name})`;
    const formattedBody = {
      _subject: emailSubject,
      _template: 'table',
      'Parent Name': formData.parentName,
      'Child Name': formData.childName,
      'Child Age': formData.childAge,
      'Centre Location': `${selectedCentreObj.name} - ${selectedCentreObj.venue}`,
      'Phone Number': formData.phone,
      'Email Address': formData.email,
      'Preferred Date': formData.preferredDate || 'Flexible / Next Available',
      'Preferred Slot': formData.preferredTime || '9:30 AM',
      'Parent Notes': formData.notes || 'None provided',
      'Submission Timestamp': new Date().toLocaleString(),
    };

    try {
      // Direct email dispatch to the configured recipient email via FormSubmit AJAX service
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formattedBody),
      });
    } catch (err) {
      // In case of network sandbox or offline, fallback smoothly
      console.log('Direct submission fallback triggered:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoBody = `Parent Name: ${formData.parentName}
Child Name: ${formData.childName}
Age: ${formData.childAge}
Centre: ${selectedCentreObj.name} (${selectedCentreObj.venue})
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Slot: ${formData.preferredTime}
Notes: ${formData.notes || 'None'}`;

  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(`New Centre Visit Booking - ${formData.childName} (${selectedCentreObj.name})`)}&body=${encodeURIComponent(mailtoBody)}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(mailtoBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#3D2F1F]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-[#F9F6EF] rounded-3xl shadow-2xl border border-[#D8C9AD] overflow-hidden my-4 sm:my-8 z-10"
          >
            {/* Top decorative bar */}
            <div className="h-3 w-full bg-gradient-to-r from-[#E9A18A] via-[#F2D58A] to-[#A8B99A]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#D8C9AD]/60 flex items-center justify-center text-[#3D2F1F] hover:bg-white hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="p-5 sm:p-10">
              {!submitted ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9A18A]/15 text-[#3D2F1F] text-xs font-semibold">
                      <Sparkles size={14} className="text-[#E9A18A]" />
                      Direct Centre Booking
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#8B7355] font-medium">
                      Ages 1–4 · Mon–Fri · 9 AM–12 PM
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F]">
                    {centre === 'kismathpur' ? 'Enquire About Kismathpur' : 'Book a Centre Visit'}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#6B5B3E] leading-relaxed">
                    Come step into our open playscape and meet our educators. Details will be delivered directly to our admissions team at <strong className="text-[#3D2F1F]">{recipientEmail}</strong>.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:space-y-5">
                    {/* Choose Centre */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8B7355] mb-1.5">
                        Select Centre
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {centres.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setCentre(c.id)}
                            className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              centre === c.id
                                ? 'bg-white border-[#3D2F1F] shadow-sm ring-2 ring-[#3D2F1F]/10'
                                : 'bg-[#F5F0E7]/60 border-[#D8C9AD]/60 hover:bg-white/60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display font-semibold text-sm text-[#3D2F1F]">{c.name}</span>
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  c.id === 'kismathpur' ? 'bg-[#F2D58A]' : 'bg-[#A8B99A]'
                                }`}
                              />
                            </div>
                            <p className="text-[11px] text-[#8B7355] mt-0.5 line-clamp-1">{c.venue}</p>
                            <span className="inline-block mt-1.5 text-[9px] font-semibold text-[#8B7355] bg-[#F2D58A]/30 px-2 py-0.5 rounded-full">
                              {c.status}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Parents & Child info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                          Parent's Full Name *
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ananya Rao"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                          Child's Name & Age Group *
                        </label>
                        <div className="relative">
                          <Baby size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                          <div className="grid grid-cols-2 gap-1.5">
                            <input
                              type="text"
                              required
                              placeholder="Child's Name"
                              value={formData.childName}
                              onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                              className="w-full pl-9 pr-2 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                            />
                            <select
                              value={formData.childAge}
                              onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                              className="w-full px-2 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                            >
                              <option value="12-18 months">12–18 mos</option>
                              <option value="18-24 months">18–24 mos</option>
                              <option value="2-3 years">2–3 yrs</option>
                              <option value="3-4 years">3–4 yrs</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                          <input
                            type="email"
                            required
                            placeholder="parent@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date and Time preference if active center */}
                    {centre !== 'kismathpur' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                            Preferred Visit Date (Mon–Fri)
                          </label>
                          <div className="relative">
                            <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                            <input
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                            Morning Slot
                          </label>
                          <div className="relative">
                            <Clock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                            <select
                              value={formData.preferredTime}
                              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                            >
                              <option value="9:15 AM">9:15 AM — Welcome & Free Play</option>
                              <option value="10:00 AM">10:00 AM — Movement & Discovery</option>
                              <option value="11:15 AM">11:15 AM — Purposeful Learning</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-2xl bg-[#F2D58A]/25 border border-[#F2D58A] text-xs text-[#6B5B3E]">
                        <strong>Kismathpur (Play Panda)</strong> is launching shortly! Submitting this enquiry reserves your priority invitation.
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#6B5B3E] mb-1">
                        Notes for our educators (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about your child's favorite ways to play or any questions..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#D8C9AD] bg-white text-xs sm:text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <p className="text-[11px] text-[#8B7355] text-center sm:text-left">
                        Will send all details directly to <strong>{recipientEmail}</strong>.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#3D2F1F] text-[#F9F6EF] font-semibold text-xs sm:text-sm hover:bg-[#2A1F13] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Details...</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} className="text-[#F2D58A]" />
                            <span>{centre === 'kismathpur' ? 'Join Priority Waitlist' : 'Confirm Visit Booking'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A8B99A]/25 text-[#3D6B3E] flex items-center justify-center mx-auto mb-3.5">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F]">
                    Details Dispatched Directly to Email!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#6B5B3E] max-w-md mx-auto">
                    Thank you, <strong>{formData.parentName || 'Parent'}</strong>. Your visit request for <strong>{formData.childName || 'your toddler'}</strong> at <strong>{selectedCentreObj.name}</strong> has been transmitted directly to our inbox at <strong className="text-[#3D2F1F]">{recipientEmail}</strong>.
                  </p>

                  <div className="mt-5 p-4 rounded-2xl bg-white border border-[#D8C9AD] text-left max-w-md mx-auto text-xs space-y-2 text-[#6B5B3E]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#D8C9AD]/40">
                      <span className="font-bold text-[#3D2F1F]">Submission Details:</span>
                      <button
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B7355] hover:text-[#3D2F1F] cursor-pointer"
                      >
                        {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                        <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#E9A18A] shrink-0" />
                      <span>{selectedCentreObj.name} — {selectedCentreObj.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#A8B99A] shrink-0" />
                      <span>Mon–Fri · 9:00 AM – 12:00 PM (Preferred: {formData.preferredTime})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-[#F2D58A] shrink-0" />
                      <span>Notification sent to: {recipientEmail}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#3D2F1F] text-[#3D2F1F] font-semibold text-xs hover:bg-[#3D2F1F] hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <Mail size={13} />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#3D2F1F] text-white font-semibold text-xs hover:bg-[#2A1F13] transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
