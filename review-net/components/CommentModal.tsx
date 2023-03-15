import React from "react";
import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { AiTwotoneStar } from "react-icons/ai";

export default function CommentModal() {
  const [show, setShow] = React.useState(false);

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [star, setStar] = React.useState(0);
  const [content, setContent] = React.useState("");

  const submitForm = () => {
    // console.log("submitting form");
    // console.log(isAnonymous);
    // console.log(star);
    // console.log(content);

    // e.preventDefault();
    // const data = new FormData(e.target);
    // setShow(false)
    // const value = Object.fromEntries(data.entries());
    // console.log(value.author);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
      >
        <AiTwotoneStar className="w-4 h-4 mr-2 fill-current" />
        Review
      </button>

      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          {/* <form> */}
          <div className="space-y-6 px-4 pb-4 sm:pb-6 lg:px-6 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Review
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stars" value="Rate" />
              </div>

              <input
                type="number"
                name="stars"
                value={star}
                onChange={(e) => {
                  setStar(parseInt(e.target.value));
                }}
                id="stars"
                required
                className="block w-1/3 border disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="content" value="Message" />
              </div>
              <textarea
                id="content"
                // value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  // console.log(e.target.value);
                  
                }}
                name="content"
                className="block w-full border disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                name="remember"
                onChange={(e) => {
                  setIsAnonymous(e.target.checked);
                }}
              />
              <Label htmlFor="remember">Anonymous Review</Label>
            </div>
            <div className="w-full">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  type="submit" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
          {/* </form> */}
        </Modal.Body>
      </Modal>
    </>
  );
}
