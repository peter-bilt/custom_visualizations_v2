looker.plugins.visualizations.add({
  // Id and Label are legacy properties that no longer have any function besides documenting
  // what the visualization used to have. The properties are now set via the manifest
  // form within the admin/visualizations page of Looker
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [{ Large: "large" }, { Small: "small" }],
      display: "radio",
      default: "large",
    },
  },
  // Set up the initial state of the visualization
  create: function (element, config) {
    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .hello-world-vis {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .hello-world-text-large {
          font-size: 72px;
        }
        .hello-world-text-small {
          font-size: 18px;
        }
      </style>
    `;

    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    this.clearErrors();

    console.log("data", data);
    console.log("data", element);
    console.log("config", config);
    console.log("queryResponse", queryResponse);
    console.log("queryResponse", details);

    element.innerHTML = `
    <style>
      .hello-world-vis {
        /* Vertical centering */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .hello-world-text-large {
        font-size: 72px;
      }
      .hello-world-text-small {
        font-size: 18px;
      }
    </style>
  `;

    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));

    const dataValue =
      data[0]["property_property.count_distinct_properties"].rendered;

    console.log("dataValue", dataValue);

    this._textElement.innerText = `test component: ${dataValue}`; // You can replace "Hello, Looker!" with any text you want.

    // We are done rendering! Let Looker know.
    done();
  },
});
