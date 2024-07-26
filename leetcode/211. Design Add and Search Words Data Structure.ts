interface Children {
  [key: string]: TrieNode;
}

class TrieNode {
  children: Children;

  isWordEnd: boolean;

  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode();
      }

      cur = cur.children[c];
    }

    cur.isWordEnd = true;
  }

  search(word: string): boolean {
    const dfs = (j: number, root: TrieNode): boolean => {
      let cur: TrieNode = root;

      for (let i = j; i < word.length; i += 1) {
        const c: string = word[i];

        if (c === '.') {
          for (const child of Object.values(cur.children)) {
            if (dfs(i + 1, child)) return true;
          }

          return false;
        }

        if (!cur.children[c]) return false;

        cur = cur.children[c];
      }

      return cur.isWordEnd;
    };

    return dfs(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

export default WordDictionary;
