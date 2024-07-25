interface Children {
  [key: string]: TrieNode;
}

class TrieNode {
  children: Children;

  endOfWord: boolean;

  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode();
      }

      cur = cur.children[c];
    }

    cur.endOfWord = true;
  }

  search(word: string): boolean {
    let cur: TrieNode = this.root;

    for (const c of word) {
      if (!cur.children[c]) return false;

      cur = cur.children[c];
    }

    return cur.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let cur: TrieNode = this.root;

    for (const c of prefix) {
      if (!cur.children[c]) return false;

      cur = cur.children[c];
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;
