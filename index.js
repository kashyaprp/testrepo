npm run diff

> lerna@1.0.0 diff /Users/iosuser/Desktop/lerna1
> lerna diff

lerna notice cli v4.0.0
diff --git a/packages/common/index.js b/packages/common/index.js
index c244305..efe554b 100644
--- a/packages/common/index.js
+++ b/packages/common/index.js
@@ -1,3 +1,3 @@
 module.exports = () => {
-    console.log("Hello React Developers!");
+    console.log("Hello React Native Developers!");
   };
\ No newline at end of file
diff --git a/packages/common/package.json b/packages/common/package.json
index e851fcd..3c7f36d 100644
--- a/packages/common/package.json
+++ b/packages/common/package.json
@@ -4,6 +4,6 @@
   "main": "index.js",
   "license": "MIT",
   "scripts": {
-    "test": "echo server test script"
+    "test": "echo common test script"
   }
 }

 ==========================