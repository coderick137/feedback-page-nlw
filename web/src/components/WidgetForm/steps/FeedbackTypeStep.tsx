import { feedbackTypes, feedbackType } from '..';
import CloseButton from '../../CloseButton';


interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: feedbackType) => void;
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className='text-xl leadin-6'>
          deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className='flex pt-8 py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              onClick={() => onFeedbackTypeChanged(key as feedbackType)}
              type='button'
            >
              <img src={value.images.source} alt={value.images.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  )
}

export default FeedbackTypeStep;