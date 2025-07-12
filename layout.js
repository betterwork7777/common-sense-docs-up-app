export const metadata = {
  title: 'Common Sense Docs – N-400 Application',
  description: 'AI-powered document assistance for immigration and legal forms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 text-gray-900 font-sans">
        <header className="bg-blue-900 text-white p-4 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Common Sense Docs</h1>
            <span className="text-sm">AI + 15 Years of Experience</span>
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="text-center text-sm text-gray-600 mt-12 mb-6">
          © {new Date().getFullYear()} Common Sense Document Services. All rights reserved.
        </footer>
      </body>
    </html>
  );
}