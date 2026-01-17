import { Spotlight } from "../components/ui/spotlight-new";
import { CircularText } from "../components/mvpblocks/circular-text";
import { IconDownload } from "@tabler/icons-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Gomelan_Resume.pdf";
    link.download = "Gomelan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative flex items-center justify-center py-8 sm:py-12 md:py-16 bg-black overflow-hidden min-h-screen">
      <Spotlight/>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-3 sm:px-4">
          <CardSpotlight className="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80">
          
          <div className="relative z-20 flex items-center justify-center h-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <CircularText
              text="View My Resume • Download PDF •"
              radius={100}
              className="mx-auto font-bold text-sm sm:text-lg md:text-2xl text-white"
            />
          </div>
        </CardSpotlight>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] mx-2 sm:mx-0">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Resume Preview</DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">Gomelan_Resume.pdf</DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-auto h-[50vh] sm:h-[60vh] md:h-[70vh]">
            <iframe
              src="/Gomelan_Resume.pdf#view=FitH"
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleDownload} className="gap-2 text-xs sm:text-sm">
              <IconDownload size={16} className="sm:w-5 sm:h-5" />
              Download
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Resume;