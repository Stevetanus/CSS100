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
    <div class="frame day15">
      <div class="center_d15">
        <div class="bar"></div>
        <div class="title">Drop file to upload</div>
        <div class="dropzone">
          <div class="content">
            <img
              src="https://100dayscss.com/codepen/upload.svg"
              class="upload"
              alt="upload"
            />
            <span class="filename"></span>
            <input type="file" class="input" />
          </div>
        </div>
        <img
          src="https://100dayscss.com/codepen/syncing.svg"
          class="syncing"
          alt="syncing"
        />
        <img
          src="https://100dayscss.com/codepen/checkmark.svg"
          class="done"
          alt="done"
        />
        <div class="upload-btn">Upload file</div>
      </div>
    </div>
  );
}
