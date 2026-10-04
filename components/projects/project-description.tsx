import { Check } from "lucide-react";

const eyebrowClass =
  "text-xs font-bold uppercase tracking-[0.24em] text-emerald-700";

interface ProjectStoryProps {
  paragraphs: string[];
  bullets: string[];
}

// Case-study narrative: the first paragraph sets up the problem/context, the
// remaining paragraphs are the approach, and the bullets become the outcomes.
const ProjectStory = ({ paragraphs, bullets }: ProjectStoryProps) => {
  const [problem, ...approach] = paragraphs;

  return (
    <div className="space-y-16">
      {problem && (
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <p className={`${eyebrowClass} lg:col-span-3`}>The challenge</p>
          <p className="font-serif text-xl italic leading-8 text-slate-700 sm:text-2xl lg:col-span-9">
            {problem}
          </p>
        </div>
      )}

      {approach.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <p className={`${eyebrowClass} lg:col-span-3`}>The approach</p>
          <div className="space-y-5 leading-8 text-slate-600 lg:col-span-9">
            {approach.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      {bullets.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <p className={`${eyebrowClass} lg:col-span-3`}>Key outcomes</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-9">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              >
                <Check
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectStory;
