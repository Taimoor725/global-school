
// import Navbar from "@/components/common/NavBar";
// import FeedbackList from "../components/FeedbackList";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Recent Feedbacks</h2>
        <FeedbackList />
      </div>
    </div>
  );
}
