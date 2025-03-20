import { Button } from "../components/ui/button";

function CTA() {
  return (
    <section className="py-20 relative bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Are You Ready for the Mission?</h2>
        <p className="text-xl text-gray-300 mb-10">
          Join the ranks of elite developers and innovators. Enlist now for Hack4Brahma.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-700 hover:bg-green-600 text-white text-lg py-6 px-8">ENLIST NOW</Button>
          <Button
            variant="outline"
            className="border-green-700 text-green-500 hover:bg-green-900/30 text-lg py-6 px-8"
          >
            CONTACT COMMAND
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
