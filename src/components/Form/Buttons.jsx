import { Button } from "@/components/ui/button";
import { RotateCw } from 'lucide-react';

const Buttons = ({ text, isPending}) => {
  return (
    <>
      <Button className="capitalize mt-2" disabled={isPending}>
        {isPending ? (
          <>
            <RotateCw className="animate-spin" /><span>Please wait...</span>
          </>
        ) : (
          <p>{text}</p>
        )}
      </Button>
    </>
  );
};
export default Buttons;
