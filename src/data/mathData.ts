// CBSE Mathematics Data - Classes 1 to 10
export interface Chapter {
  id: string;
  name: string;
  description: string;
  topics: string[];
  formulas?: { name: string; formula: string }[];
  exercises?: { name: string; questions: number }[];
  hasMCQ?: boolean;
  hasHOTS?: boolean;
  hasPreviousYear?: boolean;
}

export interface ClassData {
  id: number;
  name: string;
  description: string;
  chapterCount: number;
  color: string;
  bgGradient: string;
  chapters: Chapter[];
}

export const classesData: ClassData[] = [
  {
    id: 1,
    name: "Class 1",
    description: "Foundation mathematics introducing numbers, shapes, and basic operations.",
    chapterCount: 13,
    color: "#0aad93",
    bgGradient: "from-[#d9f6f2] to-[#e8faf7]",
    chapters: [
      { id: "c1-ch1", name: "Shapes and Space", description: "Learn about different shapes and spatial understanding.", topics: ["Introduction to shapes", "Sorting shapes", "Spatial relationships"] },
      { id: "c1-ch2", name: "Numbers from One to Nine", description: "Counting and number recognition from 1 to 9.", topics: ["Counting objects", "Number names", "Before, after, between"] },
      { id: "c1-ch3", name: "Addition", description: "Basic addition concepts with single digit numbers.", topics: ["Addition as combining", "Addition on number line", "Word problems"] },
      { id: "c1-ch4", name: "Subtraction", description: "Basic subtraction concepts with single digit numbers.", topics: ["Subtraction as taking away", "Subtraction on number line", "Word problems"] },
      { id: "c1-ch5", name: "Numbers from Ten to Twenty", description: "Understanding two-digit numbers 10-20.", topics: ["Counting 10-20", "Place value", "Number names"] },
      { id: "c1-ch6", name: "Time", description: "Introduction to reading clocks and understanding time.", topics: ["Morning, afternoon, evening", "Clock face", "Days of the week"] },
      { id: "c1-ch7", name: "Measurement", description: "Comparing lengths, weights, and capacities.", topics: ["Long and short", "Heavy and light", "More or less"] },
      { id: "c1-ch8", name: "Numbers from Twenty-one to Fifty", description: "Understanding numbers 21-50.", topics: ["Counting 21-50", "Number patterns", "Comparison"] },
      { id: "c1-ch9", name: "Data Handling", description: "Basic collection and representation of data.", topics: ["Collecting information", "Tally marks", "Simple pictographs"] },
      { id: "c1-ch10", name: "Patterns", description: "Recognizing and creating simple patterns.", topics: ["Shape patterns", "Number patterns", "Color patterns"] },
      { id: "c1-ch11", name: "Numbers", description: "Number reading, writing, and comparison.", topics: ["Number names 1-100", "Comparison", "Ordering"] },
      { id: "c1-ch12", name: "Money", description: "Introduction to coins and currency.", topics: ["Coins and notes", "Counting money", "Simple transactions"] },
      { id: "c1-ch13", name: "How Many", description: "Counting and estimation practice.", topics: ["Counting objects", "Estimation", "Comparison"] }
    ]
  },
  {
    id: 2,
    name: "Class 2",
    description: "Building number sense, operations, and introduction to multiplication.",
    chapterCount: 15,
    color: "#0aad93",
    bgGradient: "from-[#d9f6f2] to-[#e8faf7]",
    chapters: [
      { id: "c2-ch1", name: "What is Long, What is Round?", description: "Understanding shapes and their properties.", topics: ["Rolling and sliding", "Shapes around us", "3D shapes introduction"] },
      { id: "c2-ch2", name: "Counting in Groups", description: "Introduction to multiplication as repeated addition.", topics: ["Grouping objects", "Multiplication concept", "Skip counting"] },
      { id: "c2-ch3", name: "How Much Can You Carry?", description: "Understanding weight and capacity.", topics: ["Comparing weights", "Measuring capacity", "Balance"] },
      { id: "c2-ch4", name: "Counting in Tens", description: "Understanding tens and place value.", topics: ["Tens and ones", "Counting by 10s", "Number patterns"] },
      { id: "c2-ch5", name: "Patterns", description: "Creating and extending patterns.", topics: ["Number patterns", "Shape patterns", "Symmetry introduction"] },
      { id: "c2-ch6", name: "Footprints", description: "Understanding 2D shapes and their properties.", topics: ["2D shapes", "Sides and corners", "Drawing shapes"] },
      { id: "c2-ch7", name: "Jugs and Mugs", description: "Comparing and measuring liquid volumes.", topics: ["Comparing volumes", "Standard units", "Word problems"] },
      { id: "c2-ch8", name: "Tens and Ones", description: "Place value system for two-digit numbers.", topics: ["Place value", "Expanded form", "Comparing numbers"] },
      { id: "c2-ch9", name: "My Funday", description: "Days of the week and calendar concepts.", topics: ["Days and months", "Calendar reading", "Seasons"] },
      { id: "c2-ch10", name: "Add our Points", description: "Addition of two-digit numbers.", topics: ["Addition without carrying", "Addition with carrying", "Word problems"] },
      { id: "c2-ch11", name: "Lines and Lines", description: "Introduction to different types of lines.", topics: ["Straight and curved lines", "Horizontal and vertical", "Drawing lines"] },
      { id: "c2-ch12", name: "Give and Take", description: "Addition and subtraction of two-digit numbers.", topics: ["Addition", "Subtraction", "Word problems"] },
      { id: "c2-ch13", name: "The Longest Step", description: "Introduction to measuring length.", topics: ["Comparing lengths", "Non-standard units", "Standard units"] },
      { id: "c2-ch14", name: "Birds Come, Birds Go", description: "Addition and subtraction of three-digit numbers.", topics: ["3-digit addition", "3-digit subtraction", "Word problems"] },
      { id: "c2-ch15", name: "How Many Ponytails?", description: "Data handling and basic statistics.", topics: ["Collecting data", "Tally marks", "Pictographs"] }
    ]
  },
  {
    id: 3,
    name: "Class 3",
    description: "Multiplication, division, fractions, and measurement fundamentals.",
    chapterCount: 14,
    color: "#0aad93",
    bgGradient: "from-[#d9f6f2] to-[#e8faf7]",
    chapters: [
      { id: "c3-ch1", name: "Where to Look From", description: "Understanding different views of 3D objects.", topics: ["Top view", "Side view", "Front view"] },
      { id: "c3-ch2", name: "Fun with Numbers", description: "Large numbers and number operations.", topics: ["Numbers up to 1000", "Number patterns", "Even and odd"] },
      { id: "c3-ch3", name: "Give and Take", description: "Addition and subtraction of 3-digit numbers.", topics: ["Addition", "Subtraction", "Estimation"] },
      { id: "c3-ch4", name: "Long and Short", description: "Measuring length using standard units.", topics: ["Centimeter and meter", "Kilometer", "Comparing lengths"] },
      { id: "c3-ch5", name: "Shapes and Designs", description: "Understanding different shapes and patterns.", topics: ["Types of shapes", "Tangrams", "Patterns in shapes"] },
      { id: "c3-ch6", name: "Fun with Give and Take", description: "Advanced addition and subtraction.", topics: ["Regrouping", "Word problems", "Mental math"] },
      { id: "c3-ch7", name: "Time Goes On", description: "Reading time and understanding calendars.", topics: ["Reading clocks", "AM and PM", "Calendar"] },
      { id: "c3-ch8", name: "Who is Heavier?", description: "Comparing and measuring weights.", topics: ["Comparing weights", "Gram and kilogram", "Balance"] },
      { id: "c3-ch9", name: "How Many Times?", description: "Multiplication tables and properties.", topics: ["Multiplication tables", "Multiplication facts", "Word problems"] },
      { id: "c3-ch10", name: "Play with Patterns", description: "Number and shape patterns.", topics: ["Number sequences", "Shape patterns", "Symmetry"] },
      { id: "c3-ch11", name: "Jugs and Mugs", description: "Measuring and comparing liquid volumes.", topics: ["Liter and milliliter", "Comparing volumes", "Word problems"] },
      { id: "c3-ch12", name: "Can We Share?", description: "Introduction to division.", topics: ["Division as sharing", "Division and multiplication", "Remainder"] },
      { id: "c3-ch13", name: "Smart Charts!", description: "Data collection and representation.", topics: ["Collecting data", "Bar graphs", "Pictographs"] },
      { id: "c3-ch14", name: "Rupees and Paise", description: "Understanding money and transactions.", topics: ["Rupees and paise", "Conversions", "Word problems"] }
    ]
  },
  {
    id: 4,
    name: "Class 4",
    description: "Large numbers, factors, fractions, decimals, and geometry basics.",
    chapterCount: 14,
    color: "#0aad93",
    bgGradient: "from-[#d9f6f2] to-[#e8faf7]",
    chapters: [
      { id: "c4-ch1", name: "Building with Bricks", description: "Understanding shapes and patterns in architecture.", topics: ["Brick patterns", "Floor patterns", "Wall patterns"] },
      { id: "c4-ch2", name: "Long and Short", description: "Advanced measurement concepts.", topics: ["Kilometer and meter", "Conversions", "Distance"] },
      { id: "c4-ch3", name: "A Trip to Bhopal", description: "Real-life math problem solving.", topics: ["Distance calculation", "Time and speed", "Budgeting"] },
      { id: "c4-ch4", name: "Tick-Tick-Tick", description: "Understanding time comprehensively.", topics: ["Reading clocks", "Time calculation", "24-hour format"] },
      { id: "c4-ch5", name: "The Way The World Looks", description: "Different perspectives and views.", topics: ["Maps", "Directions", "Scale drawing"] },
      { id: "c4-ch6", name: "The Junk Seller", description: "Money and business mathematics.", topics: ["Profit and loss", "Loan concept", "Simple budgeting"] },
      { id: "c4-ch7", name: "Jugs and Mugs", description: "Volume measurement and conversions.", topics: ["Liter and milliliter", "Conversions", "Word problems"] },
      { id: "c4-ch8", name: "Carts and Wheels", description: "Introduction to circles.", topics: ["Circle parts", "Radius and diameter", "Drawing circles"] },
      { id: "c4-ch9", name: "Halves and Quarters", description: "Introduction to fractions.", topics: ["Half and quarter", "Fraction representation", "Equivalent fractions"] },
      { id: "c4-ch10", name: "Play with Patterns", description: "Advanced pattern recognition.", topics: ["Number patterns", "Shape patterns", "Tessellations"] },
      { id: "c4-ch11", name: "Tables and Shares", description: "Multiplication, division, and factors.", topics: ["Multiplication tables", "Factors", "Multiples"] },
      { id: "c4-ch12", name: "How Heavy? How Light?", description: "Weight measurement and estimation.", topics: ["Gram and kilogram", "Weighing balance", "Estimation"] },
      { id: "c4-ch13", name: "Fields and Fences", description: "Introduction to perimeter.", topics: ["Perimeter concept", "Calculating perimeter", "Word problems"] },
      { id: "c4-ch14", name: "Smart Charts", description: "Advanced data handling.", topics: ["Data collection", "Bar graphs", "Pie charts introduction"] }
    ]
  },
  {
    id: 5,
    name: "Class 5",
    description: "Number systems, operations, fractions, decimals, and introduction to geometry.",
    chapterCount: 14,
    color: "#0aad93",
    bgGradient: "from-[#d9f6f2] to-[#e8faf7]",
    chapters: [
      { id: "c5-ch1", name: "The Fish Tale", description: "Large numbers and number operations.", topics: ["Large numbers", "Number operations", "Word problems"] },
      { id: "c5-ch2", name: "Shapes and Angles", description: "Understanding angles and their types.", topics: ["Types of angles", "Measuring angles", "Angle properties"] },
      { id: "c5-ch3", name: "How Many Squares?", description: "Introduction to area and perimeter.", topics: ["Area concept", "Area of rectangle", "Perimeter"] },
      { id: "c5-ch4", name: "Parts and Wholes", description: "Fractions and their operations.", topics: ["Types of fractions", "Equivalent fractions", "Fraction operations"] },
      { id: "c5-ch5", name: "Does it Look the Same?", description: "Symmetry and patterns.", topics: ["Line symmetry", "Rotational symmetry", "Making symmetric figures"] },
      { id: "c5-ch6", name: "Be My Multiple, I'll be Your Factor", description: "Factors, multiples, and divisibility.", topics: ["Factors and multiples", "Divisibility rules", "LCM and HCF"] },
      { id: "c5-ch7", name: "Can You See the Pattern?", description: "Number and geometric patterns.", topics: ["Number patterns", "Shape patterns", "Coding-decoding"] },
      { id: "c5-ch8", name: "Mapping Your Way", description: "Introduction to maps and scale.", topics: ["Reading maps", "Scale", "Directions"] },
      { id: "c5-ch9", name: "Boxes and Sketches", description: "3D shapes and their nets.", topics: ["3D shapes", "Nets of cubes", "Drawing 3D objects"] },
      { id: "c5-ch10", name: "Tenths and Hundredths", description: "Introduction to decimals.", topics: ["Decimal fractions", "Decimal place value", "Conversions"] },
      { id: "c5-ch11", name: "Area and its Boundary", description: "Advanced area and perimeter concepts.", topics: ["Area of rectangles", "Perimeter", "Comparing areas"] },
      { id: "c5-ch12", name: "Smart Charts", description: "Data representation and interpretation.", topics: ["Data collection", "Bar graphs", "Line graphs"] },
      { id: "c5-ch13", name: "Ways to Multiply and Divide", description: "Advanced multiplication and division.", topics: ["Long multiplication", "Long division", "Estimation"] },
      { id: "c5-ch14", name: "How Big? How Heavy?", description: "Volume, area, and weight measurement.", topics: ["Volume", "Weight", "Capacity"] }
    ]
  },
  {
    id: 6,
    name: "Class 6",
    description: "Number systems, algebra, geometry, data handling, and ratio-proportion.",
    chapterCount: 14,
    color: "#0056b3",
    bgGradient: "from-[#d4e2ff] to-[#e8f0ff]",
    chapters: [
      { id: "c6-ch1", name: "Knowing Our Numbers", description: "Large numbers, Indian and International systems, estimation.", topics: ["Comparing numbers", "Large numbers", "Estimation", "Roman numerals"], formulas: [{ name: "Place Value", formula: "1 lakh = 100 thousands" }] },
      { id: "c6-ch2", name: "Whole Numbers", description: "Natural numbers, whole numbers, properties of operations.", topics: ["Predecessor and successor", "Number line", "Properties of whole numbers"], formulas: [{ name: "Closure Property", formula: "a + b = whole number" }] },
      { id: "c6-ch3", name: "Playing with Numbers", description: "Factors, multiples, divisibility rules, prime and composite.", topics: ["Factors and multiples", "Prime and composite", "Divisibility rules", "LCM and HCF"], formulas: [{ name: "LCM × HCF", formula: "LCM(a,b) × HCF(a,b) = a × b" }] },
      { id: "c6-ch4", name: "Basic Geometrical Ideas", description: "Points, lines, angles, triangles, quadrilaterals, circles.", topics: ["Points and lines", "Angles", "Triangles", "Circles"] },
      { id: "c6-ch5", name: "Understanding Elementary Shapes", description: "Types of angles, triangles, quadrilaterals, 3D shapes.", topics: ["Types of angles", "Types of triangles", "Polygons", "3D shapes"] },
      { id: "c6-ch6", name: "Integers", description: "Positive and negative numbers, operations on integers.", topics: ["Introduction to integers", "Number line", "Addition and subtraction", "Multiplication"], formulas: [{ name: "Additive Inverse", formula: "a + (-a) = 0" }] },
      { id: "c6-ch7", name: "Fractions", description: "Types of fractions, equivalent fractions, operations.", topics: ["Types of fractions", "Equivalent fractions", "Comparing fractions", "Operations"], formulas: [{ name: "Equivalent Fraction", formula: "a/b = (a×n)/(b×n)" }] },
      { id: "c6-ch8", name: "Decimals", description: "Decimal representation, operations, word problems.", topics: ["Decimal representation", "Comparing decimals", "Addition and subtraction", "Applications"], formulas: [{ name: "Decimal to Fraction", formula: "0.5 = 5/10 = 1/2" }] },
      { id: "c6-ch9", name: "Data Handling", description: "Recording, organizing, and representing data.", topics: ["Recording data", "Pictographs", "Bar graphs", "Mean and average"], formulas: [{ name: "Mean", formula: "Mean = Sum of observations / Number of observations" }] },
      { id: "c6-ch10", name: "Mensuration", description: "Perimeter and area of rectangles and squares.", topics: ["Perimeter", "Area of rectangle", "Area of square", "Applications"], formulas: [{ name: "Perimeter of Rectangle", formula: "P = 2(l + b)" }, { name: "Area of Rectangle", formula: "A = l × b" }] },
      { id: "c6-ch11", name: "Algebra", description: "Variables, expressions, equations, and simple equations.", topics: ["Variables", "Expressions", "Equations", "Solving equations"], formulas: [{ name: "Variable Rule", formula: "2n + 1 = odd number" }] },
      { id: "c6-ch12", name: "Ratio and Proportion", description: "Ratio, proportion, unitary method.", topics: ["Ratio", "Proportion", "Unitary method", "Word problems"], formulas: [{ name: "Proportion", formula: "a:b = c:d means a/b = c/d" }] },
      { id: "c6-ch13", name: "Symmetry", description: "Reflection symmetry, rotational symmetry.", topics: ["Line symmetry", "Reflection", "Rotational symmetry"] },
      { id: "c6-ch14", name: "Practical Geometry", description: "Constructing lines, angles, and shapes.", topics: ["Constructing circles", "Constructing lines", "Constructing angles", "Perpendicular bisector"] }
    ]
  },
  {
    id: 7,
    name: "Class 7",
    description: "Integers, fractions, decimals, algebra, geometry, and data handling.",
    chapterCount: 15,
    color: "#0056b3",
    bgGradient: "from-[#d4e2ff] to-[#e8f0ff]",
    chapters: [
      { id: "c7-ch1", name: "Integers", description: "Properties and operations on integers.", topics: ["Multiplication", "Division", "Properties"], formulas: [{ name: "Division Rules", formula: "(-a) ÷ (-b) = a ÷ b" }] },
      { id: "c7-ch2", name: "Fractions and Decimals", description: "Multiplication and division of fractions and decimals.", topics: ["Multiplication of fractions", "Division of fractions", "Decimal operations"], formulas: [{ name: "Division", formula: "a/b ÷ c/d = a/b × d/c" }] },
      { id: "c7-ch3", name: "Data Handling", description: "Collection, organization, and representation of data.", topics: ["Mean, median, mode", "Bar graphs", "Probability introduction"], formulas: [{ name: "Probability", formula: "P(E) = Number of favorable outcomes / Total outcomes" }] },
      { id: "c7-ch4", name: "Simple Equations", description: "Setting up and solving linear equations.", topics: ["Setting equations", "Solving equations", "Applications"], formulas: [{ name: "Linear Equation", formula: "ax + b = c → x = (c-b)/a" }] },
      { id: "c7-ch5", name: "Lines and Angles", description: "Types of angles, pairs of lines, transversals.", topics: ["Complementary angles", "Supplementary angles", "Parallel lines"], formulas: [{ name: "Angles on Line", formula: "Sum = 180°" }, { name: "Angles around Point", formula: "Sum = 360°" }] },
      { id: "c7-ch6", name: "The Triangle and its Properties", description: "Medians, altitudes, angle sum property, Pythagoras.", topics: ["Medians and altitudes", "Angle sum property", "Pythagoras theorem", "Types of triangles"], formulas: [{ name: "Angle Sum", formula: "∠A + ∠B + ∠C = 180°" }, { name: "Pythagoras", formula: "a² + b² = c²" }] },
      { id: "c7-ch7", name: "Congruence of Triangles", description: "Criteria for congruence of triangles.", topics: ["SSS", "SAS", "ASA", "RHS congruence"] },
      { id: "c7-ch8", name: "Comparing Quantities", description: "Ratio, percentage, profit and loss, simple interest.", topics: ["Ratio and percentage", "Profit and loss", "Simple interest"], formulas: [{ name: "Simple Interest", formula: "SI = (P × R × T) / 100" }, { name: "Profit %", formula: "(Profit/CP) × 100" }] },
      { id: "c7-ch9", name: "Rational Numbers", description: "Operations on rational numbers, representation.", topics: ["Operations", "Representation on number line", "Comparison"], formulas: [{ name: "Rational Form", formula: "p/q where q ≠ 0" }] },
      { id: "c7-ch10", name: "Practical Geometry", description: "Constructing triangles and quadrilaterals.", topics: ["Constructing triangles", "Constructing quadrilaterals", "Special cases"] },
      { id: "c7-ch11", name: "Perimeter and Area", description: "Area of parallelogram, triangle, circle.", topics: ["Area of parallelogram", "Area of triangle", "Circumference and area of circle"], formulas: [{ name: "Area of Triangle", formula: "A = ½ × b × h" }, { name: "Circle Area", formula: "A = πr²" }, { name: "Circumference", formula: "C = 2πr" }] },
      { id: "c7-ch12", name: "Algebraic Expressions", description: "Terms, factors, coefficients, operations.", topics: ["Terms and factors", "Like and unlike terms", "Addition and subtraction"], formulas: [{ name: "(a+b)²", formula: "a² + 2ab + b²" }] },
      { id: "c7-ch13", name: "Exponents and Powers", description: "Laws of exponents, decimal number system.", topics: ["Laws of exponents", "Scientific notation", "Standard form"], formulas: [{ name: "a^m × a^n", formula: "a^(m+n)" }, { name: "(a^m)^n", formula: "a^(mn)" }] },
      { id: "c7-ch14", name: "Symmetry", description: "Line symmetry, rotational symmetry.", topics: ["Reflection symmetry", "Rotational symmetry", "Symmetry in figures"] },
      { id: "c7-ch15", name: "Visualising Solid Shapes", description: "Faces, edges, vertices, nets, drawing solids.", topics: ["3D shapes", "Nets", "Drawing solids", "Viewing sections"] }
    ]
  },
  {
    id: 8,
    name: "Class 8",
    description: "Rational numbers, linear equations, quadrilaterals, geometry, and data handling.",
    chapterCount: 16,
    color: "#0056b3",
    bgGradient: "from-[#d4e2ff] to-[#e8f0ff]",
    chapters: [
      { id: "c8-ch1", name: "Rational Numbers", description: "Properties and operations on rational numbers.", topics: ["Closure, commutative, associative", "Additive and multiplicative identity", "Distributivity"], formulas: [{ name: "Additive Inverse", formula: "-a/b is additive inverse of a/b" }] },
      { id: "c8-ch2", name: "Linear Equations in One Variable", description: "Solving linear equations and applications.", topics: ["Solving equations", "Reducing equations", "Word problems"], formulas: [{ name: "General Form", formula: "ax + b = cx + d" }] },
      { id: "c8-ch3", name: "Understanding Quadrilaterals", description: "Types of quadrilaterals and their properties.", topics: ["Polygons", "Types of quadrilaterals", "Parallelogram properties"], formulas: [{ name: "Sum of Interior Angles", formula: "(n-2) × 180°" }, { name: "Ext Angle Sum", formula: "360°" }] },
      { id: "c8-ch4", name: "Practical Geometry", description: "Constructing quadrilaterals.", topics: ["When 4 sides and diagonal given", "When 3 sides and 2 angles", "Special cases"] },
      { id: "c8-ch5", name: "Data Handling", description: "Organizing data, grouped frequency, histograms.", topics: ["Grouped frequency", "Histograms", "Pie charts", "Probability"], formulas: [{ name: "Probability", formula: "P(E) = Favorable/Total" }] },
      { id: "c8-ch6", name: "Squares and Square Roots", description: "Properties, patterns, and methods.", topics: ["Properties of squares", "Pythagorean triplets", "Square root methods"], formulas: [{ name: "Square of odd", formula: "n² = sum of first n odd numbers" }] },
      { id: "c8-ch7", name: "Cubes and Cube Roots", description: "Cubes, cube roots, and patterns.", topics: ["Properties of cubes", "Cube root by prime factorization", "Patterns"], formulas: [{ name: "Cube Pattern", formula: "1³ + 2³ + ... + n³ = (n(n+1)/2)²" }] },
      { id: "c8-ch8", name: "Comparing Quantities", description: "Ratios, percentages, compound interest.", topics: ["Ratio and percentage", "Increase and decrease", "Compound interest"], formulas: [{ name: "Compound Interest", formula: "A = P(1 + R/100)^n" }, { name: "CI Formula", formula: "CI = A - P" }] },
      { id: "c8-ch9", name: "Algebraic Expressions and Identities", description: "Multiplication, identities, and applications.", topics: ["Multiplying expressions", "Standard identities", "Applications"], formulas: [{ name: "(a+b)²", formula: "a² + 2ab + b²" }, { name: "(a-b)²", formula: "a² - 2ab + b²" }, { name: "a²-b²", formula: "(a+b)(a-b)" }] },
      { id: "c8-ch10", name: "Visualising Solid Shapes", description: "3D shapes, Euler's formula, nets.", topics: ["3D shapes", "Euler's formula", "Nets of solids"], formulas: [{ name: "Euler's Formula", formula: "F + V - E = 2" }] },
      { id: "c8-ch11", name: "Mensuration", description: "Area of trapezium, quadrilateral, solid shapes.", topics: ["Area of trapezium", "Area of quadrilateral", "Surface area of solids", "Volume"], formulas: [{ name: "Trapezium Area", formula: "½(a+b) × h" }, { name: "Cylinder Volume", formula: "πr²h" }, { name: "CSA Cylinder", formula: "2πrh" }] },
      { id: "c8-ch12", name: "Exponents and Powers", description: "Laws of exponents, standard form.", topics: ["Negative exponents", "Laws of exponents", "Standard form"], formulas: [{ name: "a^(-n)", formula: "1/a^n" }, { name: "a^0", formula: "1" }] },
      { id: "c8-ch13", name: "Direct and Inverse Proportions", description: "Direct proportion, inverse proportion.", topics: ["Direct proportion", "Inverse proportion", "Applications"], formulas: [{ name: "Direct", formula: "x/y = k" }, { name: "Inverse", formula: "xy = k" }] },
      { id: "c8-ch14", name: "Factorisation", description: "Factorisation methods and division.", topics: ["Common factors", "Regrouping", "Using identities", "Division"], formulas: [{ name: "x²+(a+b)x+ab", formula: "(x+a)(x+b)" }] },
      { id: "c8-ch15", name: "Introduction to Graphs", description: "Bar graphs, pie graphs, histograms, line graphs.", topics: ["Types of graphs", "Linear graphs", "Applications"] },
      { id: "c8-ch16", name: "Playing with Numbers", description: "Games with numbers, divisibility tests.", topics: ["Number games", "Divisibility tests", "Cryptarithms"] }
    ]
  },
  {
    id: 9,
    name: "Class 9",
    description: "Number systems, polynomials, coordinate geometry, Euclid's geometry, and algebra.",
    chapterCount: 15,
    color: "#082777",
    bgGradient: "from-[#d4e2ff] to-[#c8d8ff]",
    chapters: [
      { id: "c9-ch1", name: "Number Systems", description: "Irrational numbers, real numbers, decimal expansions.", topics: ["Irrational numbers", "Real numbers", "Decimal expansions", "Operations"], formulas: [{ name: "Rational + Irrational", formula: "= Irrational" }] },
      { id: "c9-ch2", name: "Polynomials", description: "Types, zeros, remainder and factor theorem.", topics: ["Types of polynomials", "Zeros of polynomial", "Remainder theorem", "Factor theorem"], formulas: [{ name: "Remainder Th.", formula: "p(a) = remainder when p(x) ÷ (x-a)" }, { name: "Factor Th.", formula: "(x-a) is factor if p(a) = 0" }] },
      { id: "c9-ch3", name: "Coordinate Geometry", description: "Cartesian plane, plotting points, distance formula.", topics: ["Cartesian system", "Plotting points", "Distance formula", "Section formula"], formulas: [{ name: "Distance", formula: "d = √[(x₂-x₁)² + (y₂-y₁)²]" }, { name: "Section Formula", formula: "((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))" }] },
      { id: "c9-ch4", name: "Linear Equations in Two Variables", description: "Graphical and algebraic solutions.", topics: ["Solution of equations", "Graphical method", "Word problems"], formulas: [{ name: "General Form", formula: "ax + by + c = 0" }] },
      { id: "c9-ch5", name: "Introduction to Euclid's Geometry", description: "Euclid's definitions, axioms, postulates.", topics: ["Euclid's definitions", "Axioms", "Postulates", "Equivalent versions"] },
      { id: "c9-ch6", name: "Lines and Angles", description: "Types of angles, intersecting lines, parallel lines.", topics: ["Types of angles", "Intersecting lines", "Parallel lines", "Transversal"], formulas: [{ name: "Vertically Opposite", formula: "∠1 = ∠3, ∠2 = ∠4" }, { name: "Linear Pair", formula: "∠1 + ∠2 = 180°" }] },
      { id: "c9-ch7", name: "Triangles", description: "Congruence criteria, inequalities.", topics: ["Congruence rules", "SAS", "ASA", "SSS", "RHS", "Triangle inequalities"], formulas: [{ name: "Triangle Inequality", formula: "AB + BC > AC" }] },
      { id: "c9-ch8", name: "Quadrilaterals", description: "Properties of parallelograms, midpoint theorem.", topics: ["Parallelogram properties", "Midpoint theorem", "Converse theorems"], formulas: [{ name: "Midpoint Th.", formula: "Line joining midpoints || third side and half" }] },
      { id: "c9-ch9", name: "Areas of Parallelograms and Triangles", description: "Area theorems and applications.", topics: ["Same base same parallels", "Area relations"], formulas: [{ name: "Area Triangle", formula: "½ × base × height" }, { name: "Area Parallelogram", formula: "base × height" }] },
      { id: "c9-ch10", name: "Circles", description: "Chords, arcs, angles, cyclic quadrilaterals.", topics: ["Chords and arcs", "Angles in circle", "Cyclic quadrilaterals"], formulas: [{ name: "Angle at Center", formula: "= 2 × angle at circumference" }] },
      { id: "c9-ch11", name: "Constructions", description: "Constructing triangles and angles.", topics: ["Bisectors", "Constructing triangles", "Justification"] },
      { id: "c9-ch12", name: "Heron's Formula", description: "Area of triangles and quadrilaterals.", topics: ["Heron's formula", "Area of quadrilateral", "Applications"], formulas: [{ name: "Heron's Formula", formula: "A = √[s(s-a)(s-b)(s-c)], s=(a+b+c)/2" }] },
      { id: "c9-ch13", name: "Surface Areas and Volumes", description: "Cuboid, cube, cylinder, cone, sphere.", topics: ["Cuboid and cube", "Cylinder", "Cone", "Sphere and hemisphere"], formulas: [{ name: "Cuboid TSA", formula: "2(lb + bh + hl)" }, { name: "Cylinder CSA", formula: "2πrh" }, { name: "Cone Volume", formula: "⅓πr²h" }, { name: "Sphere Volume", formula: "4/3 πr³" }] },
      { id: "c9-ch14", name: "Statistics", description: "Mean, median, mode of grouped data.", topics: ["Mean", "Median", "Mode", "Ogive"], formulas: [{ name: "Mean", formula: "Σfᵢxᵢ / Σfᵢ" }, { name: "Median", formula: "l + [(n/2 - cf)/f] × h" }] },
      { id: "c9-ch15", name: "Probability", description: "Experimental and theoretical probability.", topics: ["Experimental approach", "Theoretical probability", "Applications"], formulas: [{ name: "P(E)", formula: "Number of favorable outcomes / Total outcomes" }] }
    ]
  },
  {
    id: 10,
    name: "Class 10",
    description: "Real numbers, polynomials, linear equations, triangles, trigonometry, and coordinate geometry.",
    chapterCount: 15,
    color: "#082777",
    bgGradient: "from-[#d4e2ff] to-[#c8d8ff]",
    chapters: [
      { id: "c10-ch1", name: "Real Numbers", description: "Euclid's division, fundamental theorem, irrational numbers.", topics: ["Euclid's division lemma", "Fundamental theorem", "HCF and LCM", "Irrational numbers"], formulas: [{ name: "Euclid's Division", formula: "a = bq + r, 0 ≤ r < b" }, { name: "HCF×LCM", formula: "HCF(a,b) × LCM(a,b) = a × b" }] },
      { id: "c10-ch2", name: "Polynomials", description: "Geometric meaning, division algorithm.", topics: ["Graphs of polynomials", "Relationship between zeros", "Division algorithm"], formulas: [{ name: "Sum of Zeros", formula: "-b/a" }, { name: "Product of Zeros", formula: "c/a (for ax²+bx+c)" }] },
      { id: "c10-ch3", name: "Pair of Linear Equations in Two Variables", description: "Graphical and algebraic methods.", topics: ["Graphical method", "Substitution", "Elimination", "Cross-multiplication"], formulas: [{ name: "Cross-Multiplication", formula: "x/(b₁c₂-b₂c₁) = y/(c₁a₂-c₂a₁) = 1/(a₁b₂-a₂b₁)" }] },
      { id: "c10-ch4", name: "Quadratic Equations", description: "Solution by factorization, completing square, formula.", topics: ["Solution by factorization", "Completing square", "Quadratic formula", "Nature of roots"], formulas: [{ name: "Quadratic Formula", formula: "x = [-b ± √(b²-4ac)] / 2a" }, { name: "Discriminant", formula: "D = b² - 4ac" }] },
      { id: "c10-ch5", name: "Arithmetic Progressions", description: "nth term, sum of n terms, applications.", topics: ["nth term", "Sum of n terms", "Word problems"], formulas: [{ name: "nth Term", formula: "aₙ = a + (n-1)d" }, { name: "Sum of n Terms", formula: "Sₙ = n/2[2a + (n-1)d]" }] },
      { id: "c10-ch6", name: "Triangles", description: "Similarity criteria, areas, Pythagoras theorem.", topics: ["Similarity criteria", "Areas of similar triangles", "Pythagoras theorem"], formulas: [{ name: "Pythagoras", formula: "AC² = AB² + BC²" }, { name: "Area Ratio", formula: "(Ratio of sides)²" }] },
      { id: "c10-ch7", name: "Coordinate Geometry", description: "Distance, section, area of triangle.", topics: ["Distance formula", "Section formula", "Area of triangle", "Collinearity"], formulas: [{ name: "Distance", formula: "√[(x₂-x₁)²+(y₂-y₁)²]" }, { name: "Area", formula: "½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|" }] },
      { id: "c10-ch8", name: "Introduction to Trigonometry", description: "Trigonometric ratios, identities.", topics: ["Trigonometric ratios", "Trigonometric identities", "Complementary angles"], formulas: [{ name: "sin²A+cos²A", formula: "1" }, { name: "1+tan²A", formula: "sec²A" }, { name: "1+cot²A", formula: "cosec²A" }] },
      { id: "c10-ch9", name: "Some Applications of Trigonometry", description: "Heights and distances.", topics: ["Line of sight", "Angle of elevation", "Angle of depression"], formulas: [{ name: "Height", formula: "h = d × tan θ" }] },
      { id: "c10-ch10", name: "Circles", description: "Tangents, number of tangents, applications.", topics: ["Tangent properties", "Number of tangents", "Applications"], formulas: [{ name: "Tangent Perpendicular", formula: "Radius ⊥ Tangent at point of contact" }] },
      { id: "c10-ch11", name: "Constructions", description: "Division of line, tangents to circle.", topics: ["Division of line segment", "Tangents to circle", "Justification"] },
      { id: "c10-ch12", name: "Areas Related to Circles", description: "Perimeter, area, sector, segment.", topics: ["Circumference and area", "Sector area", "Segment area", "Combinations"], formulas: [{ name: "Sector Area", formula: "(θ/360°) × πr²" }, { name: "Arc Length", formula: "(θ/360°) × 2πr" }] },
      { id: "c10-ch13", name: "Surface Areas and Volumes", description: "Combination of solids, frustum.", topics: ["Combination of solids", "Conversion of solids", "Frustum of cone"], formulas: [{ name: "Frustum Volume", formula: "⅓πh(r₁²+r₂²+r₁r₂)" }, { name: "Frustum CSA", formula: "π(r₁+r₂)l" }] },
      { id: "c10-ch14", name: "Statistics", description: "Mean, mode, median of grouped data, ogive.", topics: ["Mean of grouped data", "Mode", "Median", "Ogive"], formulas: [{ name: "Mode", formula: "l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h" }, { name: "Median", formula: "l + [(n/2-cf)/f] × h" }] },
      { id: "c10-ch15", name: "Probability", description: "Theoretical approach to probability.", topics: ["Theoretical probability", "Complementary events", "Applications"], formulas: [{ name: "P(E)", formula: "Favorable outcomes / Total outcomes" }, { name: "P(E) + P(not E)", formula: "1" }] }
    ]
  }
];

export const popularChapters = [
  { id: "c6-ch11", name: "Algebra", classId: 6, topic: "Variables & Expressions", image: "/images/chapter-thumb-1.jpg" },
  { id: "c10-ch4", name: "Quadratic Equations", classId: 10, topic: "Formulas & Roots", image: "/images/chapter-thumb-2.jpg" },
  { id: "c10-ch8", name: "Trigonometry", classId: 10, topic: "Ratios & Identities", image: "/images/chapter-thumb-3.jpg" },
  { id: "c9-ch12", name: "Heron's Formula", classId: 9, topic: "Area Calculations", image: "/images/chapter-thumb-1.jpg" },
  { id: "c7-ch11", name: "Mensuration", classId: 7, topic: "Area & Perimeter", image: "/images/chapter-thumb-2.jpg" },
  { id: "c8-ch2", name: "Linear Equations", classId: 8, topic: "One Variable", image: "/images/chapter-thumb-3.jpg" }
];

export const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Class 10 Student",
    avatar: "/images/avatar-1.jpg",
    text: "This website helped me score 95% in my Class 10 boards! The step-by-step solutions and extra practice questions made all the difference. Highly recommended!"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Class 9 Student",
    avatar: "/images/avatar-2.jpg",
    text: "The chapter-wise solutions are incredibly clear. I finally understood Trigonometry thanks to the detailed explanations and formula cards. Best math resource online!"
  },
  {
    id: 3,
    name: "Mrs. Kavita Reddy",
    role: "Parent",
    avatar: "/images/avatar-3.jpg",
    text: "As a parent, I was struggling to help my child with math homework. This platform has been a blessing with its clear solutions and practice worksheets."
  },
  {
    id: 4,
    name: "Rohan Gupta",
    role: "Class 10 Student",
    avatar: "/images/avatar-4.jpg",
    text: "The previous year questions and HOTS section helped me prepare thoroughly for my board exams. I went from scoring 70% to 92% in just 3 months!"
  }
];

export const faqs = [
  {
    question: "Are all CBSE math solutions available on this website?",
    answer: "Yes! We provide complete chapter-wise solutions for CBSE Mathematics from Class 1 to Class 10. Every chapter includes NCERT exercise solutions, extra practice questions, MCQs, and important formulas."
  },
  {
    question: "Is this website completely free to use?",
    answer: "Absolutely! All our math solutions, practice questions, worksheets, and revision notes are 100% free. No registration or subscription required."
  },
  {
    question: "Are extra questions and practice sets included?",
    answer: "Yes, each chapter comes with additional practice questions beyond NCERT, including MCQs, short answer questions, long answer questions, and Higher Order Thinking Skills (HOTS) questions."
  },
  {
    question: "Is the content updated for the latest CBSE syllabus?",
    answer: "Our content is regularly updated to align with the latest CBSE curriculum and NCERT textbooks. We follow the most recent syllabus guidelines and exam patterns."
  },
  {
    question: "Can I download worksheets and practice tests?",
    answer: "Yes! Each chapter includes downloadable worksheets and practice tests in PDF format that you can print or use digitally for offline practice."
  },
  {
    question: "Is this useful for board exam preparation?",
    answer: "Definitely! Our platform is specifically designed to help with board exam preparation. We include previous year questions, sample papers, revision notes, and exam tips to help you score maximum marks."
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "How to Score Full Marks in Math: 10 Proven Strategies",
    excerpt: "Discover the top strategies used by toppers to achieve perfect scores in mathematics exams. From time management to error reduction.",
    image: "/images/blog-study-tips.jpg",
    date: "April 15, 2026",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Master Algebraic Formulas: Complete Reference Guide",
    excerpt: "A comprehensive collection of all algebraic formulas from Class 6 to Class 10 with examples and practice problems.",
    image: "/images/blog-formulas.jpg",
    date: "April 10, 2026",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Trigonometry in Real Life: Applications Beyond the Classroom",
    excerpt: "Explore how trigonometric concepts are used in architecture, navigation, engineering, and everyday problem-solving.",
    image: "/images/blog-trigonometry.jpg",
    date: "April 5, 2026",
    readTime: "6 min read"
  }
];

export const features = [
  {
    title: "Chapter-wise Solutions",
    description: "Complete step-by-step solutions for every chapter in the CBSE Mathematics syllabus.",
    icon: "BookOpen"
  },
  {
    title: "NCERT & CBSE Aligned",
    description: "All content strictly follows NCERT textbooks and the latest CBSE curriculum guidelines.",
    icon: "CheckCircle"
  },
  {
    title: "Extra Practice Questions",
    description: "Additional questions beyond NCERT to strengthen your understanding and problem-solving skills.",
    icon: "Pencil"
  },
  {
    title: "Important Formulas",
    description: "Curated formula sheets for quick revision before exams and daily practice.",
    icon: "Sigma"
  },
  {
    title: "Worksheets & Sample Papers",
    description: "Downloadable practice worksheets and model test papers for thorough exam preparation.",
    icon: "FileText"
  },
  {
    title: "Revision Notes",
    description: "Concise revision notes summarizing key concepts for each chapter.",
    icon: "StickyNote"
  },
  {
    title: "MCQ & HOTS Questions",
    description: "Multiple choice questions and Higher Order Thinking Skills problems for advanced preparation.",
    icon: "Brain"
  },
  {
    title: "Previous Year Papers",
    description: "Access to previous year board exam questions with detailed solutions.",
    icon: "Clock"
  }
];

export const whyChooseUs = [
  {
    title: "Simple Explanations",
    description: "Complex concepts broken down into easy-to-understand steps with clear language suitable for all students."
  },
  {
    title: "Step-by-Step Solutions",
    description: "Every problem solved with detailed working steps so you never miss a concept or technique."
  },
  {
    title: "Student-Friendly Language",
    description: "Content written in simple English that makes mathematics accessible to every student."
  },
  {
    title: "Free Access",
    description: "All solutions, worksheets, and practice materials are completely free with no hidden costs."
  },
  {
    title: "Updated CBSE Syllabus",
    description: "Content regularly updated to match the latest CBSE curriculum and examination patterns."
  },
  {
    title: "Fast Learning Support",
    description: "Quick search, organized navigation, and mobile-friendly design for learning anywhere, anytime."
  }
];
