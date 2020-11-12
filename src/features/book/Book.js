import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookAdded,
  selectAll,
  selectTotal,
  booksReceived,
  booksLoading,
  bookUpdated
} from "./bookSlice";

export default function Book() {
  const dispatch = useDispatch();
  // 添加一本书
  const addOne = () => {
    dispatch(
      bookAdded({ id: Math.random() * 50, title: `First${Math.random() * 50}` })
    );
  };

  const batchReplace = () => {
    dispatch(booksLoading());
    dispatch(
      booksReceived([
        { id: "a", title: "vue" },
        {
          id: "b",
          title: "react",
        },
      ])
    );
  };

  const bookUpdate = () => {
    dispatch(bookUpdated({ id: "a", changes: { title: "新版的vue实战教程" } }));
  };

  const allBooks = useSelector(selectAll);
  const total = useSelector(selectTotal);

  return (
    <>
      <span>目前共有{total}本书</span>
      <ul>
        {allBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <button onClick={addOne}>添加一本书</button>
      <button onClick={batchReplace}>旧书都不要了，全都换成新书</button>
      <button onClick={bookUpdate}>vue实战教程出新版了，买新书</button>
    </>
  );
}
