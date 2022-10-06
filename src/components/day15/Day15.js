import React, { useEffect } from "react";
import "./day15.css";

export default function Day15() {
  useEffect(() => {
    // let droppedFiles = false;
    let bar = document.querySelector(".bar");
    let dropzone = document.querySelector(".dropzone");
    let button = document.querySelector(".upload-btn");
    let fileInput = document.querySelector(".input");
    let syncing = document.querySelector(".syncing");
    let done = document.querySelector(".done");
    let upload = document.querySelector(".upload");
    let uploading = false;
    let fileName = "";
    let timeout;

    dropzone.addEventListener("dragover", () => {
      dropzone.classList.add("is-dragover");
    });

    dropzone.addEventListener("dragenter", () => {
      dropzone.classList.add("is-dragover");
    });

    dropzone.addEventListener("dragend", () => {
      dropzone.classList.remove("is-dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("is-dragover");
    });
    dropzone.addEventListener("drop", () => {
      dropzone.classList.remove("is-dragover");
    });

    fileInput.addEventListener("change", () => {
      fileName = document.querySelector(".filename");
      for (let i = 0; i < fileInput.files.length; i++) {
        fileName.innerHTML = `${fileInput.files[i].name}`;
      }
      upload.style.display = "none";
    });

    button.addEventListener("click", () => {
      startUpload();
    });

    function startUpload() {
      if (!uploading && fileName !== "") {
        uploading = true;
        button.innerHTML = "Uploading...";
        dropzone.classList.add("active");
        syncing.classList.add("active");
        done.classList.add("active");
        bar.classList.add("active");
        timeout = window.setTimeout(showDone, 3200);
      }
    }

    function showDone() {
      button.innerHTML = "Done";
    }
  }, []);
  return (
    <>
      <div className="frame day15">
        <div className="center_d15">
          <div className="bar"></div>
          <div className="title">Drop file to upload</div>
          <div className="dropzone">
            <div className="content">
              <img
                src="https://100dayscss.com/codepen/upload.svg"
                className="upload"
                alt="upload"
              />
              <span className="filename"></span>
              <input type="file" className="input" />
            </div>
          </div>
          <img
            src="https://100dayscss.com/codepen/syncing.svg"
            className="syncing"
            alt="syncing"
          />
          <img
            src="https://100dayscss.com/codepen/checkmark.svg"
            className="done"
            alt="done"
          />
          <div className="upload-btn">Upload file</div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Upload</h3>
        <p>
          Yes, you can actually drag and drop a file in there. But don't worry,
          the upload process is faked.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10296480"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/vYjemrj"
          >
            Source
          </a>
        </p>
      </div>
    </>
  );
}
