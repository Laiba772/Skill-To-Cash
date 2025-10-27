interface Props {
  idea: string;
}

export default function ResultBox({ idea }: Props) {
  if (!idea) return null;

  return (
    <section className="flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-3xl rounded-3xl shadow-xl border border-gray-200 p-8 bg-white/80 backdrop-blur-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          💡 Your AI-Generated Business Idea
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">{idea}</p>
      </div>
    </section>
  );
}
