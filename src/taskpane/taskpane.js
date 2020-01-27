/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import { parseEmail } from '../aviaso/aviaso';
import { init } from "../aviaso/aviaso";

/* global document, Office */

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */
    // get the user's email address
    document.getElementById("temp-tag").innerHTML = init();
    Office.context.ui.displayDialogAsync()
}
