export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-green-900 text-white">
      <p className="text-center">
        © {new Date().getFullYear()} Madi Tabon. All rights reserved.
      </p>
    </footer>
  );
}
