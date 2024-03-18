export const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" }
];


export const BookList = ({ books }) => {
    return (
        <div>
            <ul>
                {books.map((book) => {
                    return <li key={book.id}>{book.name}</li>;
                })}
            </ul>
        </div>
    );
};