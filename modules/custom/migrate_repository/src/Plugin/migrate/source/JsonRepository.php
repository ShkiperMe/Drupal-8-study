<?php

namespace Drupal\migrate_repository\Plugin\migrate\source;
use Drupal\migrate\Plugin\migrate\source\SourcePluginBase;

/**
 * Source plugin to import data from JSON
 * @MigrateSource(
 *   id = "json_repository"
 * )
 */
class JsonRepository extends SourcePluginBase {

  /**
   * {@inheritdoc}
   */
  public function getIds() {
    return [
      'rid' => [
        'type' => 'integer',
        'alias' => 'r',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    return [
      'rid' => $this->t('Repository ID'),
      'title' => $this->t('Title'),
      'date' => $this->t('Created'),
      'avatar' => $this->t('Avatar'),
      'count_stars' => $this->t('Count stars'),
      'description' => $this->t('Description'),
      'forks' => $this->t('Forks'),
      'full_name' => $this->t('Full name'),
      'homepage' => $this->t('Homepage'),
      'html_url' => $this->t('HTML URL'),
      'language' => $this->t('Language'),
      'open_issues' => $this->t('Open issues'),
      'url' => $this->t('URL'),
      'watchers' => $this->t('Watchers'),

    ];
  }

  /**
   * {@inheritdoc}
   */
  public function __toString() {
    return "json data";
  }

  /**
   * Initializes the iterator with the source data.
   * @return \Iterator
   *   An iterator containing the data for this source.
   */
  protected function initializeIterator() {
    $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree('language');
    $rows = [];
    foreach ($terms as $term) {
      $url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:' . $term->name . '&sort=stars&order=desc&type=Repositories&client_id=eab9dc25cd1dc31c24cc&client_secret=604de2939d6b2091aa5061653425a458df4fcb37';
      $client = \Drupal::httpClient();
      $request = $client->request('GET', $url, ['headers' => ['Accept' => 'application/json']]);
      $response = json_decode($request->getBody());
      foreach ($response->items as $repo) {
        $rows[] = [
          'rid' => $repo->id,
          'title' => $repo->name,
          'date' => strtotime($repo->created_at),
          'avatar' => $repo->owner->avatar_url,
          'count_stars' => $repo->stargazers_count,
          'description' => $repo->description,
          'forks' => $repo->forks,
          'full_name' => $repo->full_name,
          'homepage' => $repo->homepage,
          'html_url' => $repo->html_url,
          'language' => $term->tid,
          'open_issues' => $repo->open_issues,
          'url' => $repo->url,
          'watchers' => $repo->watchers,
        ];
      }
    }

    // Migrate needs an Iterator class, not just an array
    return new \ArrayIterator($rows);
  }
}
