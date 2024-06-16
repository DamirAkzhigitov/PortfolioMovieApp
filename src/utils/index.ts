export const externalLink = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank"; // Open in new tab
  link.rel = "noopener noreferrer"; // Security reason
  link.click(); // Simulate a click event

  document.body.appendChild(link); // Need to append for Firefox compatibility
  link.parentNode.removeChild(link); // Remove element from the DOM
};
