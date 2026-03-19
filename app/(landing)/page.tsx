


export default function HomePage() {

  // การสร้างตัวแปร
  const name = "John Doe";
  return (
    <>
      <h1 className="text-4xl text-amber-600 font-bold animate-bounce">Hello, World!</h1>
      <h1 className="text-2xl">Welcome {name} to my website!</h1>
    </>
  );
}


// rfce ใช้ Export default function ข้างล่างได้เลย

// function page2() {
//     return (
//         <div>page</div>
//     )
// }

// export default page2

// // rafce ใช้ได้ทั้งแบบ function และ arrow function

// const page3 = () => {
//     return (
//         <div>page</div>
//     )
// }

// export default page3