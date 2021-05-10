diff --git a/.gitignore b/.gitignore
deleted file mode 100644
index e2edac9..0000000
--- a/.gitignore
+++ /dev/null
@@ -1,4 +0,0 @@
-yarn.lock
-
-node_modules/
-
diff --git a/01_githubexplorer/.gitignore b/01_githubexplorer/.gitignore
deleted file mode 100644
index 1d1e9eb..0000000
--- a/01_githubexplorer/.gitignore
+++ /dev/null
@@ -1 +0,0 @@
-#node_modules/
\ No newline at end of file
diff --git a/01_githubexplorer/public/index.html b/01_githubexplorer/public/index.html
index 8317725..ffa89d3 100644
--- a/01_githubexplorer/public/index.html
+++ b/01_githubexplorer/public/index.html
@@ -9,7 +9,7 @@
 <body>
 
     <div id="root"></div>
-    <script src="bundle.js"></script>
+    <script src="../dist/bundle.js"></script>
     
 </body>
 </html>
\ No newline at end of file
diff --git a/01_githubexplorer/src/App.jsx b/01_githubexplorer/src/App.jsx
index 39d93b0..bfbcdde 100644
--- a/01_githubexplorer/src/App.jsx
+++ b/01_githubexplorer/src/App.jsx
@@ -1,5 +1,5 @@
 export function App(){
-    return <h1>Testando </h1>
+    return <h1>Hello Word</h1>
 }
 
 
diff --git a/newtest.txt b/teste.txt
similarity index 100%
rename from newtest.txt
rename to teste.txt
