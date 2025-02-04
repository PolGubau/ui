import React from "react";
import { Chip } from "../Chip";
import { Tooltip } from "../Tooltip/Tooltip";

export interface FileListProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const FileList = React.memo((props: React.PropsWithChildren<FileListProps>) => {
  const { files = [], setFiles } = props;
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {files.map((file: File) => (
        <Tooltip
          onClick={(e) => {
            e.preventDefault();
          }}
          label={
            <div className="flex justify-normal flex-col items-start gap-1">
              {/* try to show the file */}
              {file.type.startsWith("image") && (
                <img
                  onKeyDown={() => window.open(URL.createObjectURL(file), "_blank")}
                  onClick={() => window.open(URL.createObjectURL(file), "_blank")}
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  loading="lazy"
                  className="w-64 h-32 mb-2 object-contain rounded-md border border-primary/80 bg-secondary-200"
                />
              )}
              {file.type.startsWith("video") && (
                <video
                  width="320"
                  height="240"
                  controls={true}
                  className="w-64 h-32 mb-2 object-contain rounded-md border border-primary/80 bg-secondary-200"
                >
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                  <track src={URL.createObjectURL(file)} kind="captions" srcLang="en" label="english_captions" />
                </video>
              )}
              {file.type.startsWith("audio") && (
                <audio controls={true} className="mb-2 object-contain">
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the audio element.{" "}
                  <track src={URL.createObjectURL(file)} kind="captions" srcLang="en" label="english_captions" />
                </audio>
              )}
              <h3>
                <b>Name:</b> {file.name}
              </h3>
              {Boolean(file.lastModified) && (
                <p>
                  <b>Type:</b> {file.type}
                </p>
              )}
              <p>
                <b>Size:</b>
                {
                  // if file size is less than 1MB, show it in KB
                  file.size < 1000000 ? `${Math.round(file.size / 1000)}KB` : `${Math.round(file.size / 1000000)}MB`
                }
              </p>
              {Boolean(file.lastModified) && (
                <p>
                  <b>Last modified:</b> {new Date(file.lastModified).toLocaleString()}
                </p>
              )}
            </div>
          }
          key={`${file.name}_${file.lastModified}`}
        >
          <Chip
            onClick={(e) => {
              e.preventDefault();
            }}
            onDelete={() => {
              setFiles(files.filter((f) => f !== file));
            }}
            label={file.name}
          />
        </Tooltip>
      ))}
    </ul>
  );
});

FileList.displayName = "FileList";
