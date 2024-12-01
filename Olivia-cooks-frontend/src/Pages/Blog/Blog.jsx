
const Blog = () => {
    return (
        <div className="py-4 px-4 space-y-3">
            <p className="text-xl font-bold">1. What is One way data binding?</p>
            <p className="pl-4"><span className="text-lg font-semibold">Ans:</span> One-way data binding is a data flow model in web development where information moves unidirectionally from a data source to a user interface. It ensures that changes in the data source automatically update the user interface but restricts the ability of the interface to modify the data source directly. This architecture simplifies data management and enhances predictability, making it easier to maintain applications. However, it can limit the user interface's real-time interactivity, as user actions typically can't immediately affect the data source. To achieve two-way data binding, where the interface can modify the data source, different approaches or frameworks are required.</p>

            <p className="text-xl font-bold">2. What is NPM in node.js?</p>
            <p className="pl-4"><span className="text-lg font-semibold">Ans:</span> NPM, or Node Package Manager, is a vital component of the Node.js ecosystem. It serves as a package manager for JavaScript and Node.js, simplifying the management and distribution of reusable code packages. With NPM, developers can effortlessly discover, install, and oversee dependencies for their Node.js projects. <br /> <br />

                Key features of NPM include its vast repository of open-source JavaScript packages, its command-line tool bundled with Node.js, and its reliance on the package.json file for specifying project metadata and dependencies. NPM also enforces semantic versioning and facilitates custom script definitions for common project tasks. <br /> <br />

                By using NPM, developers can efficiently integrate third-party libraries, ensuring smooth application development and maintenance. It remains a fundamental tool for Node.js developers, although alternative package managers like Yarn have emerged, offering similar functionality and compatibility options to suit different preferences and project needs.
            </p>


            <p className="text-xl font-bold">3. Different between Mongodb database vs mySQL database?</p>
            <p className="pl-4"><span className="text-lg font-semibold">Ans:</span> MongoDB and MySQL are database management systems with significant differences. MongoDB is a NoSQL database that employs a flexible, schema-less data model, allowing data to be stored in BSON documents without a predefined structure. This is ideal for unstructured or semi-structured data. In contrast, MySQL is a relational database using a structured, table-based data model with strict schemas. <br /><br />

                The query languages they employ differ as well. MongoDB utilizes a JSON-like query language tailored for document-based data, while MySQL relies on SQL, a powerful language for querying structured data in a tabular format. <br /><br />

                When it comes to scalability, MongoDB excels at horizontal scalability, distributing data across multiple servers to manage large datasets and high-velocity workloads. MySQL can scale horizontally but is often associated with vertical scaling by upgrading hardware resources. <br /><br />

                MongoDB's schema-less nature suits agile development, though data consistency enforcement may require more effort. MySQL enforces a rigid schema, ensuring data structure and consistency. The choice between the two depends on your project's specific requirements and data characteristics, with MongoDB favored for flexible, unstructured data, and MySQL for structured, transactional data.

            </p>
        </div>
    );
};

export default Blog;