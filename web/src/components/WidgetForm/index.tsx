import { useState } from 'react';

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import FeedbackTypeStep from './steps/FeedbackTypeStep';
import FeedbackContentStep from './steps/FeedbackContentStep';
import FeedbackSucessStep from './steps/FeedbackSucessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        images: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
        images: {
            source: ideaImageUrl,
            alt: 'Imagem de um lampada',
        }
    },
    OTHER: {
        title: 'Outro',
        images: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    },
}

export type feedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {

    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestart={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestart={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
            <footer className='text-xs text-neutral-400'>
                Feito por  <a className='underline' href='https://www.linkedin.com/in/ricardoanjosn/'>Code Rick</a>
            </footer>
        </div>
    );
}

export default WidgetForm;