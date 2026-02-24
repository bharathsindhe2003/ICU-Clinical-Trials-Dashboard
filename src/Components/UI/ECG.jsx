// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
// import { Document, Page, pdfjs } from "react-pdf";
import Box from "@mui/material/Box";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";

// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

export default function ECG({ pdfData, isVisible }) {
  const [selectedUuid, setSelectedUuid] = useState(null);
  const uuids = Object.keys(pdfData);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 4;
  const maxPage = Math.ceil(uuids.length / PAGE_SIZE) - 1;
  const visibleUuids = uuids.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  if (!isVisible || !pdfData) return null;

  return (
    <Box sx={{ height: { xs: "70vh", md: "100vh" }, overflowY: "hidden", overflowX: "auto", overscrollBehavior: "contain" }}>
      {/* Navigation and preview row */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, mb: 3, justifyContent: "center" }}>
        {/* Left navigation button */}
        <Box
          sx={{ cursor: page > 0 ? "pointer" : "not-allowed", fontSize: 32, px: 1, color: page > 0 ? "primary.main" : "grey.400", userSelect: "none" }}
          onClick={() => page > 0 && setPage(page - 1)}
        >
          {"<"}
        </Box>
        {/* Previews for visible UUIDs */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          {visibleUuids.map((uuid) => (
            <Box
              key={uuid}
              sx={{
                cursor: "pointer",
                border: selectedUuid === uuid ? 2 : 1,
                borderColor: selectedUuid === uuid ? "primary.main" : "#b3e5fc",
                borderRadius: 2,
                p: 1,
                bgcolor: selectedUuid === uuid ? "#e3f2fd" : "#fafafa",
                minWidth: 25,
              }}
              onClick={() => setSelectedUuid(uuid)}>
              <Box sx={{ overflow: "hidden", width: "100%" }}>
                {pdfData[uuid].svs_pdfURL ? (
                  <iframe src={pdfData[uuid].svs_pdfURL} width="100%" height="100px" style={{ border: 0, overflow: "hidden" }} title="svs-pdf" />
                ) : pdfData[uuid].icu_pdfURL ? (
                  <iframe src={pdfData[uuid].icu_pdfURL} width="100%" height="100px" style={{ border: 0, overflow: "hidden" }} title="icu-pdf" />
                ) : (
                  <PictureAsPdfIcon color={selectedUuid === uuid ? "primary" : "action"} fontSize="large" />
                )}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Right navigation button */}
        <Box
          sx={{ cursor: page < maxPage ? "pointer" : "not-allowed", fontSize: 32, px: 1, color: page < maxPage ? "primary.main" : "grey.400", userSelect: "none" }}
          onClick={() => page < maxPage && setPage(page + 1)}
        >
          {">"}
        </Box>
      </Box>
      {/* Show full PDFs for selected UUID */}
      <Box sx={{ height: { xs: "70vh", md: "100vh" }, overflowY: "auto", overflowX: "hidden", overscrollBehavior: "contain" }}>
        {selectedUuid && pdfData[selectedUuid] && (
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, justifyContent: "center", alignItems: "flex-start", mt: 2 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {/* <iframe src={`https://docs.google.com/gview?url=${pdfData[selectedUuid].svs_pdfURL}&embedded=true`} width="100%" height="1000px" style={{ border: 0 }} title="svs-pdf" /> */}
              <iframe src={`${pdfData[selectedUuid].svs_pdfURL}#toolbar=0`} width="100%" height="1000px" style={{ border: 0 }} title="svs-pdf" />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {/* <iframe src={`https://docs.google.com/gview?url=${pdfData[selectedUuid].icu_pdfURL}&embedded=true`} width="100%" height="1000px" style={{ border: 0 }} title="icu-pdf" /> */}
              <iframe src={`${pdfData[selectedUuid].icu_pdfURL}#toolbar=0`} width="100%" height="1000px" style={{ border: 0 }} title="icu-pdf" />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
