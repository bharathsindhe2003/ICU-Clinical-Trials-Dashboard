// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
// import { Document, Page, pdfjs } from "react-pdf";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";

// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

export default function ECG({ pdfData, isVisible }) {
  const [selectedUuid, setSelectedUuid] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState({ svs: false, icu: false });
  const uuids = Object.keys(pdfData);
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
          onClick={() => page > 0 && setPage(page - 1)}>
          {"<"}
        </Box>
        {/* Previews for visible UUIDs */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          {visibleUuids.map((uuid) => (
            <Box
              key={uuid}
              component="button"
              sx={{
                cursor: "pointer",
                border: selectedUuid === uuid ? 2 : 1,
                borderColor: selectedUuid === uuid ? "primary.main" : "#b3e5fc",
                borderRadius: 2,
                p: 1,
                bgcolor: selectedUuid === uuid ? "#e3f2fd" : "#fafafa",
                minWidth: 25,
                outline: "none",
                boxShadow: selectedUuid === uuid ? 2 : 0,
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: 4,
                  bgcolor: "#e3f2fd",
                },
              }}
              onClick={() => {
                setSelectedUuid(uuid);
                setLoading({
                  svs: !!pdfData[uuid].svs_pdfURL,
                  icu: !!pdfData[uuid].icu_pdfURL,
                });
              }}>
              <Box sx={{ overflow: "hidden", width: "100%" }}>
                {pdfData[uuid].svs_pdfURL ? (
                  <Box
                    sx={{
                      border: 0,
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}>
                    <iframe src={pdfData[uuid].svs_pdfURL} width="100%" height="100px" title="svs-pdf" style={{ overflow: "hidden" }} />
                  </Box>
                ) : pdfData[uuid].icu_pdfURL ? (
                  <Box
                    sx={{
                      border: 0,
                      minWidth: 0,
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}>
                    <iframe src={pdfData[uuid].icu_pdfURL} width="100%" height="100px" title="icu-pdf" style={{ overflow: "hidden" }} />
                  </Box>
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
          onClick={() => page < maxPage && setPage(page + 1)}>
          {">"}
        </Box>
      </Box>
      {/* Show full PDFs for selected UUID */}
      <Box sx={{ height: { xs: "100vh", md: "70vh" }, overscrollBehavior: "contain" }}>
        {selectedUuid && pdfData[selectedUuid] && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "stretch",
              mt: 2,
              height: "100%",
            }}>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
              {pdfData[selectedUuid].svs_pdfURL && (
                <>
                  {loading.svs && (
                    <Box sx={{ position: "absolute", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <CircularProgress />
                    </Box>
                  )}
                  <iframe
                    src={`${pdfData[selectedUuid].svs_pdfURL}`}
                    style={{ border: 0, visibility: loading.svs ? "hidden" : "visible", width: "100%", height: "100%" }}
                    title="svs-pdf"
                    onLoad={() => setLoading((prev) => ({ ...prev, svs: false }))}
                  />
                </>
              )}
            </Box>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
              {pdfData[selectedUuid].icu_pdfURL && (
                <>
                  {loading.icu && (
                    <Box sx={{ position: "absolute", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <CircularProgress />
                    </Box>
                  )}
                  <iframe
                    src={`${pdfData[selectedUuid].icu_pdfURL}`}
                    style={{ border: 0, visibility: loading.icu ? "hidden" : "visible", width: "100%", height: "100%" }}
                    title="icu-pdf"
                    onLoad={() => setLoading((prev) => ({ ...prev, icu: false }))}
                  />
                </>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
