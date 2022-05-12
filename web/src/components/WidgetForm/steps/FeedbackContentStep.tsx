import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: feedbackType;
}

const FeedbackContentStep = ({ feedbackType }: FeedbackContentStepProps) => {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
        <header>
            <button
            type="button"
            className="top-5 left-5 absolute text-zinc-400 hover:text--zinc-100"
            >
            <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>
          <span className='text-xl leading-6 flex items-center gap-2'>
              <img
              src={feedbackTypeInfo.images.source}
              alt={feedbackTypeInfo.images.alt}
              className='w-6 h-6'
              />
              {feedbackTypeInfo.title}
          </span>
              <CloseButton />
        </header>

        <div className='flex pt-8 py-8 gap-2 w-full'>

        </div>
      </>
  )
}

export default FeedbackContentStep;