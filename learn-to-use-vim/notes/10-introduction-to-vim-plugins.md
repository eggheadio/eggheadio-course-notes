# Introduction to Vim Plugins

**[📹 Video](https://egghead.io/lessons/misc-introduction-to-vim-plugins)**

## Why using plugin managers

Makes it easier to add new plugins to vim and they will take care of updating them automatically.

## Links

- [Vim-plug](https://github.com/junegunn/vim-plug)
- [Vim sensible](https://github.com/tpope/vim-sensible)

## Install Vim Plug

1. Download plug.vim by running curl on the terminal ([install guide](https://github.com/junegunn/vim-plug/blob/master/README.md#installation))
2. Open your .vimrc with vim and add `call plug#begin('~/.vim/plugged')` to a line
3. Install plugin by typing `Plug <github repo>`
4. add `call plug#end()

_Note: To install a plugin once added to the .vimrc we need reload .vimrc and call the command :PlugInstall inside vim._

### Example

In this example I'm using the Vim Plug installation steps to attempt to install the plugin [Vim sensible](https://github.com/tpope/vim-sensible).

```vim
call plug#begin('~/.vim/plugged')

Plug 'https://github.com/tpope/vim-sensible.git'

call plug#end()
```

- Then we can save the file with the command that we learned on [lesson 4](04-saving-files-in-vim.md) `:w`.

- To reload the `.vimrc` file we can run the command `:source ~/vimrc`.

- Run the command `:PlugInstall` to install the plugin.
