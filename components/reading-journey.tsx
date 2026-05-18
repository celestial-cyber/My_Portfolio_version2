"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function ReadingJourney() {
  const [selectedCategory, setSelectedCategory] = useState<
  "Fiction" | "Knowledge" | "Growth" >("Fiction")
  const [showAll, setShowAll] = useState(false)

  const books = {
   Fiction: [
  { title: "Project Hail Mary", author: "Andy Weir" },
  { title: "White Nights", author: "Fyodor Dostoevsky" },
  { title: "To Be a Cat", author: "Matt Haig" },
  { title: "Harry Potter and the Cursed Child", author: "J.K. Rowling / Jack Thorne" },
  { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling" },
  { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling" },
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
  { title: "The Kite Runner", author: "Khaled Hosseini" },
  { title: "Gunahon Ka Devta", author: "Dharamvir Bharati" },
  { title: "It Starts With Us", author: "Colleen Hoover" },
  { title: "It Ends With Us", author: "Colleen Hoover" },
  { title: "Half Girlfriend", author: "Chetan Bhagat" },
  { title: "The Girl in Room 105", author: "Chetan Bhagat" },
  { title: "One Arranged Murder", author: "Chetan Bhagat" },
  { title: "2 States", author: "Chetan Bhagat" },
  { title: "One Indian Girl", author: "Chetan Bhagat" },
  { title: "Revolution 2020", author: "Chetan Bhagat" },
  { title: "Five Point Someone", author: "Chetan Bhagat" },
  { title: "The Three Mistakes of My Life", author: "Chetan Bhagat" },
  { title: "400 Days", author: "Chetan Bhagat" },
  { title: "One Night at the Call Center", author: "Chetan Bhagat" },
  { title: "13 Reasons Why", author: "Jay Asher" },
  { title: "The Fault in Our Stars", author: "John Green" },
  { title: "The Notebook", author: "Nicholas Sparks" },
  { title: "That Night", author: "Nidhi Upadhyay" },
  { title: "The Imaginary Friend", author: "Stephen Chbosky" },
  { title: "Eleven Minutes", author: "Paulo Coelho" },
  { title: "The Blue Umbrella", author: "Ruskin Bond" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "The Girl Who Knew Too Much", author: "Vikrant Khanna" },
  { title: "Gitanjali", author: "Rabindranath Tagore" },
],

Knowledge: [
  { title: "A Brief History of Time", author: "Stephen Hawking" },
  { title: "Black Holes: The BBC Reith Lectures", author: "Stephen Hawking" },
  { title: "The Theory of Everything", author: "Stephen Hawking" },
  { title: "What Young India Wants", author: "Chetan Bhagat" },
  { title: "Making India Awesome", author: "Chetan Bhagat" },
  { title: "The Teacher I Never Met", author: "Dr. A.P.J. Abdul Kalam" },
  { title: "Biography of Bill Gates", author: "Unknown" },
  { title: "Wise and Otherwise", author: "Sudha Murty" },
  { title: "The Bird with Golden Wings", author: "Sudha Murty" },
],

Growth: [
  { title: "Ikigai", author: "Héctor García & Francesc Miralles" },
  { title: "Tuesdays with Morrie", author: "Mitch Albom" },
  { title: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam" },
  { title: "Vision 2020", author: "Dr. A.P.J. Abdul Kalam" },
  { title: "Ignited Minds", author: "Dr. A.P.J. Abdul Kalam" },
  { title: "You Are Born to Blossom", author: "Dr. A.P.J. Abdul Kalam & Arun Tiwari" },
  { title: "Notes on a Nervous Planet", author: "Matt Haig" },
  { title: "Reasons to Stay Alive", author: "Matt Haig" },
  { title: "The Midnight Library", author: "Matt Haig" },
  { title: "The Monk Who Sold His Ferrari", author: "Robin Sharma" },
],
  }

  const categoryIcons = {
    Fiction: "📖",
    Knowledge: "🧠",
    Growth: "🌱",
  }

  const totalCount =
    books.Fiction.length + books.Knowledge.length + books.Growth.length

  const visibleBooks = showAll
    ? books[selectedCategory]
    : books [selectedCategory].slice(0, 2)

  return (
    <section id="books" className="bg-black py-20 md:py-28 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
            My Reading Journey
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600" />
          </h2>
          <p className="mt-2 text-muted-foreground md:text-xl/relaxed">
            Total Books Read: <span className="font-semibold text-white">{totalCount}</span>
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {(Object.keys(books) as Array<keyof typeof books>).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false);
              }}
              className="bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <Card className="bg-[#0e0e0e] border border-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="text-xl">{categoryIcons[selectedCategory]}</span>
                <CardTitle className="text-purple-300">{selectedCategory} Books</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {visibleBooks.map((book, index) => (
                <div key={index} className="text-white">
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                </div>
              ))}
              {books[selectedCategory].length > 2 && (
                <div className="text-center pt-4">
                  <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    className="bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}