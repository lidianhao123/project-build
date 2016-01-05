## project-build
A Node Command Line Tool to auto generate project structure.

## Install
_Remarks：current version have not publish to npm,so need manual setting to global npm_

1. Download this repositories source code unzip 
2. move folder to "C:\Users\admin\AppData\Roaming\npm\node_modules"
```bash
npm install
```
3. new files "pbuild.cmd" and "pbuild" in "C:\Users\admin\AppData\Roaming\npm"
pbuild.cmd
```bash
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\project-create\bin\index.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\project-create\bin\index.js" %*
)
```
pbuild
```bash
#!/bin/sh
basedir=`dirname "$0"`

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/node_modules/project-create/bin/index.js" "$@"
  ret=$?
else 
  node  "$basedir/node_modules/project-create/bin/index.js" "$@"
  ret=$?
fi
exit $ret
```

## Usage
```bash
pbuild <project name> -T pc
```

Now you can develop your app...

## Options
```bash
 Usage: index [options] [project name]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -T, --template <str>  generate project with specify template (pc/h5/self) and other DIY template folder name 

```

