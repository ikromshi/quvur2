import React, { useCallback, useRef } from "react";
import { useDropZone } from "src/hooks/use-drop-zone";
import { useTranslate } from "src/hooks/use-translate";
import { UploadIcon } from "src/icons";

interface DropZoneProps {
  onFileDrop: (file: File) => void;
  onFileRejected?: (file: File, reason: string) => void;
  accept?: string;
  disabled?: boolean;
  supportedFormats?: string;
  selectedFile?: File | null;
  testId?: string;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFileDrop,
  onFileRejected,
  accept,
  disabled = false,
  supportedFormats,
  selectedFile,
  testId = "drop-zone",
}) => {
  const translate = useTranslate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { dragState, dropZoneProps, inputProps } = useDropZone({
    onFileDrop,
    onFileRejected,
    accept,
    disabled,
  });

  const handleDropZoneClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div
      {...dropZoneProps}
      onClick={handleDropZoneClick}
      className={`
        relative min-h-[200px] border-2 border-dashed rounded-lg
        flex flex-col items-center justify-center p-8 cursor-pointer
        transition-all duration-200 ease-in-out
        ${dragState === "idle" ? "border-gray-600 bg-gray-800 hover:border-gray-500 hover:bg-gray-700" : ""}
        ${dragState === "dragging" ? "border-purple-400 bg-gray-800" : ""}
        ${dragState === "over" ? "border-purple-500 border-solid bg-gray-700" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      data-testid={testId}
    >
      <input ref={fileInputRef} {...inputProps} id="file-input" />

      <div className="flex flex-col items-center space-y-4">
        <div
          className={`
          p-3 rounded-full
          ${dragState === "over" ? "bg-purple-700" : "bg-gray-700"}
        `}
        >
          <UploadIcon
            className={`h-8 w-8 ${
              dragState === "over" ? "text-purple-200" : "text-gray-300"
            }`}
          />
        </div>

        <div className="text-center">
          <p
            className={`text-lg font-medium ${
              dragState === "over" ? "text-purple-300" : "text-gray-200"
            }`}
          >
            {dragState === "over"
              ? translate("dropZone.activeText")
              : translate("dropZone.defaultText")}
          </p>

          {supportedFormats && (
            <p className="text-sm text-gray-400 mt-2">
              {translate("dropZone.supportedFormats", supportedFormats)}
            </p>
          )}
        </div>
      </div>

      {selectedFile && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-900 rounded-md px-3 py-2 border border-gray-700 shadow-sm">
            <p className="text-sm text-gray-300 truncate">
              {translate("dropZone.selectedFile", selectedFile.name)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
