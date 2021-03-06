import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoCapitalize="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
