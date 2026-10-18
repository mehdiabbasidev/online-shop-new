import { IBlogDetailsProps } from "@/app/_components/features/blogs/blog-details/blog-details.types";

const testBlogs :IBlogDetailsProps[]=  [
    {
        id: "1",
        title: "Next.js: The Future of Web Development",
        srcImage: "blog-1.jpg",
        label: "Development",
        date: "2024-05-28",
        visit_number: 2946,
        slug: "blog-1-the-future-of-web-development",
        content: "Next.js is a powerful React framework that enables server-side rendering and static site generation.\n\nWith features like API routes, static generation, and image optimization, it has become a preferred choice for modern web applications.",
        readingTime: 20,
        author:{
            authorName: "Sugar Rosie",
            authorPostCount: 158,
            authorStartDate: "2024-01-01",
            authorProfileImage: "/images/authors/author.png",
            authorBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
    {
      id: "2",
      title: "Understanding TypeScript Interfaces",
      srcImage: "blog-2.jpg",
      label: "TypeScript",
      date: "2024-10-18",
      visit_number: 2970,
      slug: "blog-2-understanding-typescript-interfaces",
      content: "TypeScript interfaces provide a way to define the structure of objects, ensuring type safety in applications.\n\nWith features like API routes, static generation,",
      readingTime: 14
    },
    {
      id: "3",
      title: "How to Optimize React Apps",
      srcImage: "blog-3.jpg",
      label: "React",
      date: "2024-12-20",
      visit_number: 4420,
      slug: "blog-3-how-to-optimize-react-apps",
      content: "Optimizing React apps involves techniques like memoization, lazy loading, and reducing re-renders.",
      readingTime: 25,
      author:{
        authorName: "Sara",
        authorPostCount: 430,
        authorStartDate: "2022-01-01",
        authorProfileImage: "/images/authors/author.png",
        authorBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
    },
    {
      id: "4",
      title: "Deploying Next.js with Vercel",
      srcImage: "blog-4.jpg",
      label: "Next.js",
      date: "2024-09-23",
      visit_number: 2784,
      slug: "blog-4-deploying-next.js-with-vercel",
      content: "Vercel provides an easy way to deploy Next.js applications with built-in CI/CD and global edge networks.",
      readingTime: 10
    },
    {
      id: "5",
      title: "Building a Scalable API with Node.js",
      srcImage: "blog-0.jpg",
      label: "Backend",
      date: "2024-07-07",
      visit_number: 4441,
      slug: "blog-5-building-a-scalable-api-with-node.js",
      content: "Node.js is ideal for building scalable APIs due to its event-driven architecture and non-blocking I/O.",
      readingTime: 15
    },
    {
      id: "6",
      title: "Mastering JavaScript Async/Await",
      srcImage: "blog-6.jpg",
      label: "JavaScript",
      date: "2024-06-15",
      visit_number: 3120,
      slug: "blog-6-mastering-javascript-async-await",
      content: "Async/Await simplifies working with asynchronous code in JavaScript, making it more readable and maintainable.",
      readingTime: 6
    },
    {
      id: "7",
      title: "A Deep Dive into CSS Grid",
      srcImage: "blog-7.jpg",
      label: "CSS",
      date: "2024-11-30",
      visit_number: 2580,
      slug: "blog-7-a-deep-dive-into-css-grid",
      content: "CSS Grid is a powerful layout system that enables developers to create responsive and complex layouts effortlessly.",
      readingTime: 25
    },
    {
      id: "8",
      title: "How to Secure Your Web Applications",
      srcImage: "blog-8.jpg",
      label: "Security",
      date: "2024-08-19",
      visit_number: 3715,
      slug: "blog-8-how-to-secure-your-web-applications",
      content: "Security best practices such as input validation, authentication, and HTTPS are crucial for protecting web applications.",
      readingTime: 30
    },
    {
      id: "9",
      title: "Exploring Machine Learning with Python",
      srcImage: "blog-9.jpg",
      label: "AI/ML",
      date: "2024-09-05",
      visit_number: 4890,
      slug: "blog-9-exploring-machine-learning-with-python",
      content: "Machine Learning with Python is simplified with libraries like Scikit-learn, TensorFlow, and PyTorch.",
      readingTime: 20
    },
    {
      id: "10",
      title: "The Role of DevOps in Modern Software Development",
      srcImage: "blog-10.jpg",
      label: "DevOps",
      date: "2024-07-25",
      visit_number: 4100,
      slug: "blog-10-the-role-of-devops-in-modern-software-development",
      content: "DevOps integrates development and operations to improve software deployment efficiency and reliability.",
      readingTime: 15
    }
  ]
  

export async function fetchBlogBySlug(slug: string): Promise<IBlogDetailsProps | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const blog = testBlogs.find((b) => b.slug === slug);
            resolve(blog || null);
        }, 500);
    });
}

